import React from 'react';
import Form from './form';
import Dropdow from './dropdow';
import Secciones from './secciones';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones />
                            <Dropdow />
                        </ul>
                        <Form busqueda="Buscar Producto"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
