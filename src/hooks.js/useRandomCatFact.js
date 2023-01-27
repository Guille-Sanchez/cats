import { useEffect, useState } from "react";
import { getPhrase } from "../services/getPhrase";

export const useRandomCatFact = () => {
  const [randomCatFact, setRandomCatFact] = useState();

  function updateCatPhrase() {
    getPhrase().then((newFact) => setRandomCatFact(newFact));
  }

  useEffect(() => {
    updateCatPhrase();
  }, []);
  return [randomCatFact, updateCatPhrase];
};
