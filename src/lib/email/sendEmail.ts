import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY || (import.meta as any).env?.RESEND_API_KEY;

let resend: Resend | null = null;
if (apiKey) {
  resend = new Resend(apiKey);
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export const MAIL_FROM = 'contacto@lagunasclaras.com';

export async function sendEmail(options: SendEmailOptions) {
  if (!resend) {
    console.warn('⚠️ RESEND_API_KEY is not defined. Simulating email sending:', {
      from: MAIL_FROM,
      ...options,
      html: '[HTML content omitted for logs]',
    });
    return { success: true, simulated: true };
  }

  try {
    const data = await resend.emails.send({
      from: `Lagunas Claras <${MAIL_FROM}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });
    return { success: true, data };
  } catch (error: any) {
    console.error(
      '❌ Failed to send email via Resend:',
      error?.response?.data || error.message || error
    );
    throw error;
  }
}
