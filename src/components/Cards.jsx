import React from "react";

const Cards = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="../img/netter.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Atlas de Anatomia Humana Netter</h5>
          <p className="card-text">Descripcion del Libro</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: $2000</li>
          <li className="list-group-item">Stock: 50</li>
          <button className="btn btn-primary mt-2">Agregar al Carrito</button>
        </ul>
      </div>
    </>
  );
};

export default Cards;
