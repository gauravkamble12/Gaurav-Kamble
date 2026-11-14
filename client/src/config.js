export const CONTACT = {
  email: 'kamblegaurav193@gmail.com',

  // International format, digits only. India country code is 91.
  whatsapp: '918600619076',

  // Default text pre-filled in the WhatsApp chat.
  whatsappMessage: "Hi Gaurav, I found your portfolio and I'd like to discuss a data analyst / ML opportunity.",

  // Empty string = same origin (works with the Vite dev proxy and same-origin deploys).
  // Set to e.g. 'https://api.your-domain.com' when the API is on a different host.
  apiBase: import.meta.env.VITE_API_BASE || ''
};
