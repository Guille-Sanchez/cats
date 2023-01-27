import "./App.css";
import { useCatImage } from "./hooks.js/useCatImage";
import { useRandomCatFact } from "./hooks.js/useRandomCatFact";

function App() {
  const [randomCatFact, updateCatPhrase] = useRandomCatFact();
  const catsImage = useCatImage(randomCatFact);

  return (
    <main>
      <div className="App">
        {randomCatFact && <p>{randomCatFact}</p>}
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
            updateCatPhrase();
          }}
        >
          Click to get a new fact
        </button>
      </div>
    </main>
  );
}

export default App;
