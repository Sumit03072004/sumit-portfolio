import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default';

export const sendContactEmail = async (params) => {
  try {
    if (
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: params.name,
          from_email: params.email,
          subject: params.subject,
          message: params.message,
          to_name: 'Sumit Shaw',
        },
        PUBLIC_KEY
      );
      return { success: true, message: 'Message sent successfully via EmailJS! I will respond shortly.' };
    }

    await new Promise(resolve => setTimeout(resolve, 1200));
    console.log('[Contact Form Submitted]:', params);
    return {
      success: true,
      message: 'Thank you for reaching out! Your message was received successfully. (Simulated delivery mode)'
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: error?.text || 'Failed to send message. Please try sending directly to shawr1101@gmail.com'
    };
  }
};
