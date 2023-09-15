import React from 'react'
import './style.css'
import search_icon from '../Assets/search.png'
import wicon from '../Assets/cloud.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'


function WeaterApp() {
    //* AQUÍ VA LA LÓGICA DE NUESTRO COMPONENTE 

    const search = async () =>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===''){
            return 0
        }
    
        let URI = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&unit&lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`

        {/* HAGO LA LLAMADA A LA API*/}
        let response = await fetch(URI)
        let data = await response.json()
   
        {/* SELECCIONAR ELEMENTO */}
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-velocity")
        const temperature = document.getElementsByClassName ("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        {/* MANIPULAR ELEMENTO */}
        humidity[0].innerHTML= data.main.humidity+"%"
        wind[0].innerHTML=data.wind.speed+"km/h"
        temperature[0].innerHTML=data.main.temp+"°F"
        location[0].innerHTML=data.name

    }

   


  return (
    //* VA TODA NUESTRA ESTRUCTURA HTML 
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Buscar"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="search_icon" />
                </div>
            </div>

            <div className="weather-images">
                <img className="icon" src={wicon} alt="cloud_icon" />
            </div>


            <div className="weather-temp">24°F</div>
            <div className="weather-location">London</div>
            <div className="data-container">

                <div className="element">
                    <img className="icon" src={humidity_icon} alt="humidity_icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humedad</div>
                    </div>
                </div>

                <div className="element">
                <img  className="icon" src={wind_icon} alt="wind_icon" />
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