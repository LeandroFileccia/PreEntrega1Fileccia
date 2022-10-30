import React, {useContext, useEffect, useState} from 'react';
import {CarritoContext} from '../../context/CarritoContext';
import {mostrarCarrito} from '../../utils/Cards'
const Carrito = () => {

    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    
    useEffect(() => {
        const prodMostrar = carrito.map(producto => 
                
            <div className="card cardProducto" key={producto.id} style={{ width: "18rem" }}>
        <img src={producto.img} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Descripcion del Libro</p>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Precio:{producto.precio}</li>
        <li className="list-group-item">Cantidad:{producto.cantidad}</li>
        <li className="list-group-item">Precio Total:{producto.precio * producto.cantidad}</li>
        <button className="btn btn-primary mt-2" onClick={()=> quitarProducto(producto)}>Quitar del Carrito</button>
        </ul>
        </div>      
        )
            setCarritoLocal(prodMostrar)

    }, [carrito]);

        const app = (carrito.length != 0 ) ?<div className='row'>{carritoLocal} </div>:<><h1>No existen elementos en el carrito</h1></>
    
        return app
}

export default Carrito;
