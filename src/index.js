import './style.css';
// import { refresh } from './modules/api.js';

// const refresh = () => {
//   // Code to refresh the leaderboard data goes here
// };
// refresh();

// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const score = document.getElementById('score').value;

//   // Add the data to the leaderboard
//   const leaderboard = document.getElementById('leaderboard');
//   leaderboard.innerHTML += `<div>${name}: ${score}</div>`;
// });

// main.js
import { refresh } from './modules/api.js';

refresh(); // Call the refresh function
