import { ActionError, defineAction } from 'astro:actions';
import { getCollection } from 'astro:content';
import { N8N_WEBHOOK_URL } from 'astro:env/server';
import { ContactSchema } from '../sections/contactUs/schemas/contact.schema';

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

      const payload = {
        leadId: crypto.randomUUID(),
        ...cleanInput,
        referralSource: referredOption?.label || cleanInput.referralSource,
        services: selectedServiceLabels || cleanInput.services,
        timestamp: new Date().toISOString(),
      };

      if (!N8N_WEBHOOK_URL) {
        console.warn(
          'N8N_WEBHOOK_URL is not defined in server environment. Logging payload:',
          payload
        );
        return { success: true, simulated: true };
      }
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      try {
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!response.ok) {
          console.error('n8n error:', response.statusText);
          throw new ActionError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Se ha producido un error, vuelva a intentarlo en unos instantes',
          });
        }

        return { success: true };
      } catch (error) {
        if (error instanceof ActionError) throw error;

        console.error('Action error:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Se ha producido un error, vuelva a intentarlo en unos instantes',
        });
      }
    },
  }),
};
