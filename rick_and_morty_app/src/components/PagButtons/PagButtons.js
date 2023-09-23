import React from "react";
import './PagButtons.css'

const PagButtons = ({ prev, next, handlePrevious, handleNext }) => {
  console.log(handlePrevious, handleNext);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="">
          <button className="buttonC mx-1 btn btn-light" onClick={handlePrevious}>
            previous
          </button>
        </div>
        <div className="">
          <button className="buttonC mx-1 btn btn-light" onClick={handleNext}>
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default PagButtons;
