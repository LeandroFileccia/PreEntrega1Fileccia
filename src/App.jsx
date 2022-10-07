import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/content/Navbar";
import "./App.css";
import Home from "./components/content/Home";
import Producto from "./components/content/ItemListContainer";
import About from "./components/content/About";
import Contacto from "./components/content/Contacto";
import Carrito from "./components/content/Carrito";
import Footer from "./components/content/Footer";
import Categoria from "./components/content/Categoria";
const App = () => {
  return (
    <>
      {/* <Navbar />
      <ItemListContainer greeting="Hola Mundo!" />
      <Home /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto/:id" element={<Producto/>}/>
          <Route path="/categoria/:id" element={<Categoria/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
