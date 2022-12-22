const createGame = () => {
  const game = fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: 'My cool new game address' }),
    },
  );
  return game
    .json()
    .then((data) => localStorage.setItem('Data', /\w{20}/.exec(data.result)[0]));
};

const post = async (gameId, data) => {
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
};

const get = async (gameId) => {
  const score = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
  );
  return score.json().then((data) => data.result);
};

export { createGame, post, get };