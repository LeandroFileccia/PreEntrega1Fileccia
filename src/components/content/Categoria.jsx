import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/Cards';
const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos =>{
            const productosCategoria = productos.filter(producto => producto.idCategoria == id)
            const cardProducto = productosCategoria.map (producto =>

                <div className="card cardProducto" key={producto.id} style={{ width: "18rem" }}>
                <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
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
    }, [id]);


    return (
        <>
        <div className="row">
            {productos}
            </div>
        </>
    );
}

export default Categoria;
