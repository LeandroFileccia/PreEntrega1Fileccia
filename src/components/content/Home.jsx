import React, { useState, useEffect } from "react";
import { consultarBDD } from "../../utils/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarBDD('./json/productos.json').then(productos => {
      const cardProducto = productos.map (producto =>

        <div className="card cardProducto" key={producto.id} style={{ width: "18rem" }}>
        <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Descripcion del Libro</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio:{producto.precio}</li>
          <li className="list-group-item">Stock:{producto.stock}</li>
          
          <button className="btn btn-primary mt-2"><Link className='nav-link' to={"/producto/" + producto.id}>Ver Producto</Link></button>
        </ul>
      </div>      
        )
      
      setProductos(cardProducto)
    })

  }, []);

    return (
            <div className="row">
                {productos}
            </div>
    ); 

};

export default Home;
