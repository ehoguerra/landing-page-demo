/**
 * Build a WhatsApp link without making a request or sending a message.
 * Accepts an international phone number and optional message; invalid input
 * returns null so the caller can retain the local demonstration dialog.
 * Number formatting is checked; WhatsApp account ownership is not verified.
 * @param {string} phone
 * @param {string} [message='']
 * @returns {string|null}
 */
export function whatsappUrl(phone, message = '') {
  if (typeof message !== 'string') return null;
  if (typeof phone !== 'string' || !/^\+?[\d\s()-]+$/.test(phone)) return null;
  const digits = phone.replace(/\D/g, '');
  if (!/^[1-9]\d{7,14}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
