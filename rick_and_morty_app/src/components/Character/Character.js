import React from "react";
import "./Character.css";


const Character = ({ characterList }) => {
  console.log("se ejecuta en el character");
  return (
    <>
      <div className="container custom-container">
        <div className="row">
          {
            /* Transformar la lista de personajes */
            characterList.map((character, index) => (
              /* Codigo html genérico de las tarjetas */
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 my-4">
                <div className="card blur">
                  <div className="container-img p-2">
                    <img
                      className="rounded-3 w-100 h-100"
                      src={`${character.image}`}
                      alt="img-"
                    />
                  </div>
                  <div className="p-2">
                    <h2 className="card-title text-center text-capitalize fs-4 py-2 m-0">
                      {character.name}
                    </h2>
                    <h3 className="card-title text-center fs-6 py-1 m-0">
                      ID: {character.id}
                    </h3>
                    <hr />
                    <p className="card-text">
                      Species: <hr /> {character.species}
                    </p>
                    <p className="card-text">
                      Gender: <hr />
                      {character.gender}
                    </p>
                    <p className="card-text">
                      Location: <hr />
                      {character.location.name}
                    </p>
                    <p className="card-text">
                      Status: <hr />
                      {character.status}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Character;
