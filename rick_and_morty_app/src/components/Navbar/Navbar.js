import React from "react";
import PagButtons from "../PagButtons/PagButtons";
import "./Navbar.css";

const Navbar = ({ prev, next, handlePrevious, handleNext }) => {
  return (
    <>
      <nav className="navbar stick d-flex justify-content-center">
        <div className="container-fluid d-flex justify-content-center mb-1">
          <a href="/"><img src="http://localhost:3000/logo-rick-and-morty.webp"></img></a>
        </div>
        <div>
          <PagButtons prev={prev} next={next} handlePrevious={handlePrevious} handleNext={handleNext} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
