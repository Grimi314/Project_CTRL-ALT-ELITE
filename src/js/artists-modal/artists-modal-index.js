import { markup } from './artists-modal-render';
const res = await markup();
const div = document.querySelector('.modal');

div.insertAdjacentHTML('beforeend', res);
