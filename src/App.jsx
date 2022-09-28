import React from 'react';
import Navbar from './components/Navbar';
import Contador from './components/Contador';
import Cards from './components/Cards.jsx';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting="Hola Mundo!"/>
        <Cards/>
    {/* <Contador/> */}
    </>
    );
}

export default App;
