import React from 'react'
import './style.css'


function WeaterApp() {
    //* AQUÍ VA LA LÓGICA DE NUESTRO COMPONENTE 




  return (
    //* VA TODA NUESTRA ESTRUCTURA HTML 

        <div className="container">
            <div className="top-bar">
                <input type="text" />
                <div className="search-icon">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="weather-images">
                <img src="" alt="" />
            </div>


            <div className="weather-temp">24°F</div>
            <div className="weather-location">London</div>
            <div className="data-container">

                <div className="element">
                    <img src="" alt="" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humedad</div>
                    </div>
                </div>

                <div className="element">
                <img src="" alt="" />
                    <div className="data">
                        <div className="wind-velocity">18 k/m</div>
                        <div className="text">Velocidad del viento</div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default WeaterApp