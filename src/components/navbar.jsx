import React from 'react';
import Form from './Form';
import Dropdow from './Dropdow';
import Secciones from './Secciones';
import CartWidget from './CartWidget';
import Brand from './Brand';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <Brand/>
                        <ul className="navbar-nav me-auto">
                            <Secciones />
                            <Dropdow />
                        </ul>
                        
                        <Form busqueda="Buscar Producto"/>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
