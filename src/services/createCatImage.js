export const createCatImage = (randomCatFact) => {
  const firstThreeWords = randomCatFact.split(" ", 3).join(" ");
  const CATSIMAGEAPI = `https://cataas.com/cat/says/${firstThreeWords}`;

  return fetch(`${CATSIMAGEAPI}`)
    .then((response) => response)
    .then((data) => {
      return data.url;
    });
};
