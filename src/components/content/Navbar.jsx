import { Link } from "react-router-dom";
import Form from "../layouts/Form";
import Dropdow from "../layouts/Dropdow";
import Secciones from "../layouts/Secciones";
import CartWidget from "../layouts/CartWidget";
import Brand from "../layouts/Brand";
const Navbar = () => {
  const listDrowdon = ["Anatomia","Histologia","Fisiologia","Bioquimica"]

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <Brand />
            <ul className="navbar-nav me-auto">
              <Secciones />
              <Dropdow lista={listDrowdon}/>
            </ul>

            <Form busqueda="Buscar Producto" />
            <CartWidget />
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
                
              <Link className="nav-link " to="/carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
