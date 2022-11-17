import { useEffect, useState } from "react";

interface Kanye {
  quote: string;
}

function App() {
  const [kanye, setKanye] = useState<Kanye>();

  useEffect(() => {
    fetch('https://api.kanye.rest/')
      .then(res => res.json())
      .then(data => setKanye(data))
  }, []);

  return (
    <div className="full-box">
      <div className="face-title">
        <img 
          src="https://www.nicepng.com/png/full/18-186224_kanye-west-transparent-png-image-download-kanye-west.png"
          alt="Kanye West's face"
          className="face"
        />
      <h1 className="title">Kanye quote</h1>
      </div>
      {kanye && (
        <>
          <p className="quote">
            <b>{kanye.quote}</b>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
