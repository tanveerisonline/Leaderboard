import './style.css';
import { createGame, post, get } from './modules/api.js';

const form = document.forms[0];
const leaderboard = document.querySelector('#leaderboard');

// Save game id in local storage code
const createId = async () => {
  await createGame();
  const ID = localStorage.getItem('Data');
  return ID;
};
const id = localStorage.getItem('Data') || createId();

// post new player code
const send = async () => {
  const data = {
    user: form[0].value,
    score: form[1].value,
  };
  await post(id, data);
};

form[2].onclick = (e) => {
  e.preventDefault();
  if (form[0].value !== '' && form[1].value !== '') {
    send();
    form[0].value = '';
    form[1].value = '';
  } else {
    form[0].placeholder = 'Please enter name';
    form[1].placeholder = 'Please enter score';
  }
};

// refresh code
const refresh = async () => {
  const data = await get(id);
  if (data.length > 0) {
    data.forEach((item) => {
      const node = `
      <li>
        <p class='name change-style'>${item.user} : ${item.score}</p>
      </li>`;
      const child = document.createRange().createContextualFragment(node);
      leaderboard.appendChild(child);
    });
  }
};
refresh();

document.getElementById('refresh').onclick = () => {
  leaderboard.innerHTML = '';
  refresh();
};