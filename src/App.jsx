import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from "./data/db";
import { useEffect, useState } from "react";


function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item){

    //* Iterar y buscar el elemento en nuestro carrito de compras
    const itemExists = cart.findIndex( guitar => guitar.id === item.id )

    console.log(itemExists);

    setCart( prevCart => [...prevCart, item])
  }

  return (
    <>

      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
