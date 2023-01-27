import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [randomCatFact, setRandomCatFact] = useState("");
  const [catsImage, setCatsImage] = useState("");

  function getPhrase() {
    const CATSFACTSAPI =
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
    let subscribed = true;
    if (subscribed) {
      fetch(CATSFACTSAPI)
        .then((response) => response.json())
        .then((data) => {
          let fact = data.text;
          setRandomCatFact(() => data.text);
          const CATSIMAGEAPI = `https://cataas.com/cat/says/${fact
            .split(" ", 3)
            .join(" ")}`;
          fetch(`${CATSIMAGEAPI}`)
            .then((response) => response)
            .then((data) => {
              setCatsImage(data.url);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    return () => {
      subscribed = false;
    };
  }

  useEffect(() => {
    getPhrase();
  }, []);

  return (
    <main>
      <div className="App">
        {randomCatFact && <h1>{randomCatFact}</h1>}
        {catsImage && (
          <img
            className="cat-image"
            src={catsImage}
            alt="Random cat which displays the first three words of a random phrase"
          />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            getPhrase();
          }}
        >
          Click to get a new fact
        </button>
      </div>
    </main>
  );
}

export default App;
