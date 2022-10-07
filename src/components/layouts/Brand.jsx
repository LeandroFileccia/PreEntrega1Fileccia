import React from "react";
import { Link } from "react-router-dom";
const Brand = () => {
  return (
    <>
      <div >
      <Link className='nav-link' to={"/"}><span className="navbar-brand mb-0 h1">
          Alvear Imprime
          </span></Link>
      
      </div>
    </>
  );
};

export default Brand;
