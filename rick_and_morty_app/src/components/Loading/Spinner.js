import React from "react";
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="loading-background">
      <div class="spinner-grow per text-light mx-2" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <div class="spinner-grow per text-light mx-2" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <div class="spinner-grow per text-light mx-2" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <div class="spinner-grow per text-light mx-2" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};


export default Spinner