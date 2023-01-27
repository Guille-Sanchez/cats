import { useEffect, useState } from "react";
import { createCatImage } from "../services/createCatImage";

export const useCatImage = (randomCatFact) => {
  const [catsImage, setCatsImage] = useState("");
  useEffect(() => {
    if (!randomCatFact) return;
    createCatImage(randomCatFact).then((newImage) => setCatsImage(newImage));
  }, [randomCatFact]);
  return catsImage;
};
