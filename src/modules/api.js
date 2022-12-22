// leaderboard.js
export const refresh = () => {
  // Fetch data from the API
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/')
    .then((response) => response.json())
    .then((data) => {
      // Add the data to the leaderboard
      const leaderboard = document.getElementById('leaderboard');
      leaderboard.innerHTML = ''; // Clear the leaderboard
      data.forEach((item) => {
        leaderboard.innerHTML += `<div>${item.name}: ${item.score}</div>`;
      });
    });
};

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  // Add the data to the API
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, score }),
  });

  // Refresh the leaderboard to show the updated data
  refresh();
});

// export default refresh();
