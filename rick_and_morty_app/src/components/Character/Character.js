import React from 'react';
import "./Character.css"

const Character = ({ characterList }) => {

    return (
        <>
            <div className='container custom-container'>
                <div className='row'>
                    {
                        /* Transformar la lista de personajes */
                        characterList.map((character, index) => (
                            /* Codigo html genérico de las tarjetas */
                            <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                <div className='card'>
                                    <img />
                                    <div>
                                        <h2 className="card-title">{character.name}</h2>
                                        <h3 className="card-title">ID: {character.id}</h3>
                                        <hr />
                                        <p className="card-text">Species: {character.species}</p>
                                        <p className="card-text">Gender: {character.gender}</p>
                                        <p className="card-text">Location: {character.location.name}</p>
                                        <p className="card-text">Status: {character.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Character