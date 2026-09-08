import { whatsappUrl } from './contact.mjs';
import { contact } from './config.mjs';

const dialog = document.querySelector('#demo-dialog');
const url = whatsappUrl(contact.phone, contact.message);
for (const link of document.querySelectorAll('[data-contact]')) {
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.showModal();
    });
  }
}
