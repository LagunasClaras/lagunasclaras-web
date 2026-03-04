import { LAGUNAS_INFO } from '@/config/lagunasInfo';
import { ActionError, defineAction } from 'astro:actions';
import { getCollection } from 'astro:content';
import { renderTemplate } from '../lib/email/renderTemplate';
import { sendEmail } from '../lib/email/sendEmail';
import { ContactSchema } from '../sections/contactUs/schemas/contact.schema';
import clientHtmlRaw from '../templates/ClientConfirmation.html?raw';
import notifHtmlRaw from '../templates/ContactNotification.html?raw';
export const server = {
  sendContact: defineAction({
    accept: 'json',
    input: ContactSchema,
    handler: async (input) => {
      // Honeypot check - if filled, it's a bot. We return "success" to confuse it.
      if (input.website) {
        console.warn('Bot detected via honeypot:', input);
        return { success: true };
      }

      const { website: _website, ...cleanInput } = input;

      // Fetch dynamic labels for the payload
      const services = await getCollection('services');
      const { getFields } = await import('../sections/contactUs/components/contactForm.content');
      const staticFields = getFields([]);

      const referredOption = staticFields
        .find((f) => f.name === 'referralSource')
        ?.options?.find(
          (opt: { value: string; label: string }) => opt.value === cleanInput.referralSource
        );

      // Map selected service values to their short titles or titles
      const selectedServiceLabels = cleanInput.services?.map((val) => {
        const service = services.find((s) => (s.data.slug || s.id) === val);
        return service ? service.data.shortTitle || service.data.title : val;
      });

      const dateStr = new Date().toLocaleString('es-AR', { dateStyle: 'long', timeStyle: 'short' });
      const firstName = cleanInput.name.split(' ')[0];
      const servicesHtmlObj =
        selectedServiceLabels
          ?.map(
            (s) => `
              <li
                class="field-value"
                style="margin: 4px 0 0 0; padding-left: 4px; list-style-type: disc"
              >
                ${s}
              </li>`
          )
          .join('') || '';

      const baseVars = {
        LOGO_URL: 'https://lagunasclaras.com/logo.png', // Fallback URL
        COMPANY_MAIL: LAGUNAS_INFO.email,
        GUSTAVO_PHONE_E164: LAGUNAS_INFO.contacts.gustavo.phoneE164,
        GUSTAVO_PHONE_DISPLAY:
          LAGUNAS_INFO.contacts.gustavo.phoneDisplayArea || LAGUNAS_INFO.contacts.gustavo.phone,
        FULL_NAME: cleanInput.name,
        FIRST_NAME: firstName,
        EMAIL: cleanInput.email,
        PHONE: cleanInput.phone,
        PHONE_DISPLAY: cleanInput.phone,
        PHONE_E164: cleanInput.phone,
        ORG: cleanInput.organization,
        LOCATION: cleanInput.location,
        REFERRAL: referredOption?.label || cleanInput.referralSource,
        CONTACT_METHOD: 'Email', // Fallback since it's not in schema
        DATE: dateStr,
        SERVICES_LIST_ITEMS: servicesHtmlObj,
        NOTES: cleanInput.notes,
      };

      try {
        const clientHtml = renderTemplate(clientHtmlRaw, baseVars);
        const notifHtml = renderTemplate(notifHtmlRaw, baseVars);

        // Run both emails concurrently
        try {
          await Promise.all([
            sendEmail({
              to: cleanInput.email,
              subject: 'Recibimos tu consulta - Lagunas Claras',
              html: clientHtml,
            }),
            sendEmail({
              to: 'nachho.losa@gmail.com', // lagunasclaras@gmail.com
              replyTo: cleanInput.email,
              subject: 'Nueva Consulta Web - Lagunas Claras',
              html: notifHtml,
            }),
          ]);
        } catch (innerError) {
          console.error('Promise.all sendEmail failed:', innerError);
          throw innerError;
        }

        return { success: true };
      } catch (error) {
        if (error instanceof ActionError) throw error;

        console.error('Action error:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Se ha producido un error al enviar el mensaje. Vuelve a intentarlo.',
        });
      }
    },
  }),
};
