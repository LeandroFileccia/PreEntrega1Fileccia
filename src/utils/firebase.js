import { initializeApp } from "firebase/app";
import {collection,doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY, // Es una variable de entorno
  authDomain: "alvearimprime.firebaseapp.com",
  projectId: "alvearimprime",
  storageBucket: "alvearimprime.appspot.com",
  messagingSenderId: "369989801112",
  appId: "1:369989801112:web:e6ed76bfbc44f9806f6ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async() => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
       await addDoc(collection(db, "productos"), {
        nombre: producto.nombre,
        precio: producto.precio, //"precio": 3000,
        stock: producto.stock, //"stock": 10,
        img: producto.img, //"img": 
        categoria: producto.idCategoria //"categoria": "Fisiologia", "idCategoria":3,
        //"id": 4,
       })
        
    });
}

const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  return prod
}
const getProductos = async() =>{
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])

  return items
}


export {cargarBaseDeDatos, getProductos, getProducto}

