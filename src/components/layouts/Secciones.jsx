import { Link } from "react-router-dom";

const Secciones = () => {
  return (
    <>
      <li className="nav-item">
      
        <Link className="nav-link active" to="/">
          Inicio
        </Link>
       
      </li>
      <li className="nav-item">
        
        <Link className="nav-link active" to="/">
          Productos
        </Link>
        
      </li>
      <li className="nav-item">
        
        <Link className="nav-link active" to="/">
          Nosotros
        </Link>
        
      </li>
    </>
  );
};

export default Secciones;
