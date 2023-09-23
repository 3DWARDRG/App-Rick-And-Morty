import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Character from "./components/Character/Character";
import Spinner from "./components/Loading/Spinner";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});


  const URI = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    getCharacters(URI);
  }, []);

  const getCharacters = (URI) => {
    fetch(URI)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results); // characters = data.results
        setInfo(data.info);
      })
      .catch((err) => console.error(err));
  };

  /* Manejadores de eventos */
  const onPrevious = () => {
    getCharacters(info.prev);
  };

  const onNext = () => {
    getCharacters(info.next);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <>
      <div
        className="content-background"
        style={{
          backgroundImage: "url(/rick-and-morty.webp)",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar
          prev={info.prev}
          next={info.next}
          handlePrevious={onPrevious}
          handleNext={onNext}
        />


         {console.log("se ejecuta primero")}
        {/* Body de las tarjetas */}
        <Character characterList={characters} />
        {console.log("se ejecuta despues de characters")}
      </div>
    </>
  );
}

export default App;
