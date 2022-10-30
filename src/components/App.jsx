import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css'
import { DarkModeProvider } from "../context/DarkModeContext";
import Navbar from "./content/Navbar";
import Home from "./content/Home";
import Producto from "./content/ItemListContainer";
import About from "./content/About";
import Nosotros from "./content/Nosotros";
import Carrito from "./content/Carrito";
import Footer from "./content/Footer";
import Categoria from "./content/Categoria";

const App = () => {
  return (
    <>
      <DarkModeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto/:id" element={<Producto/>}/>
          <Route path="/categoria/:id" element={<Categoria/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </DarkModeProvider>
    </>
  );
};

export default App;
