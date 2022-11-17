import { useEffect, useState } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    // setting up the function 'fetchJoke'
    const fetchJoke = async () => {
      const response = await fetch(
        "https://jokestemp.neillbogie.repl.co/jokes/general/random"
      );
      const jsonBody: Joke[] = await response.json();
      setJoke(jsonBody[0]);
    };
    // calling 'fetchJoke'
    fetchJoke();
  }, []);
  // useEffect was written like this because:
  // useEffect can only take a non-async function as its callback 
  // (that's just the way it's written), so this is a way of 
  // getting around that.

  
  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Joke app</h1>
      {joke && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{joke.setup}</b>
          </p>
          <p>
            <i>{joke.punchline}</i>
          </p>
        </>
      )}
    </>
  );
}

export default App;
