import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoProvider } from './context/CarritoContext';
import './styles/index.css';
import App from './components/App';
import './utils/Cards'
// import './utils/x.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);

