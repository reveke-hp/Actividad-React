import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";

function App() {


  const [productos, guardarProductos] = useState([
    {id:1, articulo:"Konoha Genin - Campera",precio:39.99},
    {id:2, articulo:"Akatsuki Member - Campera",precio:35.99},
    {id:3, articulo:"Sensei - Remera",precio:11.99},
    {id:4, articulo:"Konoha - Remera",precio:16.99},
  ]);

  return (
    <div className="App">
      <Header/>
      <h1>Articulos de Naruto - Compra Online</h1>
      {productos.map(producto =>
        <Producto
          producto = {producto}
        />
        )}
  
      <Footer anio= {"2021"} />




     
    </div>
  );
}

export default App;
