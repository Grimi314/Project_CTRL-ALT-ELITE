import { markup } from './artists-modal-render';
const res = await markup();
const div = document.querySelector('.modal');
console.log(div);

div.insertAdjacentHTML('beforeend', res);
