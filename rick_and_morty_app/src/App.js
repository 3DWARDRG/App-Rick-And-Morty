import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import PagButtons from './components/PagButtons/PagButtons';
import Character from './components/Character/Character';

function App() {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const URI = "https://rickandmortyapi.com/api/character"

  useEffect(() => {
    getCharacters(URI)
  }, [])

  const getCharacters = (URI) => {
    fetch(URI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        console.log(data.info)
        setCharacters(data.results)// characters = data.results
        setInfo(data.info)
      })
      .catch()
  }

  /* Manejadores de eventos */
  const onPrevious = () => {
    getCharacters(info.prev)
  }

  const onNext = () => {
    getCharacters(info.next)
  }

  return (
    <>
      <Navbar />

      <div>
        <PagButtons prev={info.prev} next={info.next} handlePrevious={onPrevious} handleNext={onNext} />
        {/* Body de las tarjetas */}
        <Character characterList={characters} />
        <PagButtons prev={info.prev} next={info.next} handlePrevious={onPrevious} handleNext={onNext} />
      </div>
    </>
  );
}

export default App;
