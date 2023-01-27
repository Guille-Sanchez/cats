export const getPhrase = () => {
  const CATSFACTSAPI =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";

  return fetch(CATSFACTSAPI)
    .then((response) => response.json())
    .then((data) => {
      return data.text;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
