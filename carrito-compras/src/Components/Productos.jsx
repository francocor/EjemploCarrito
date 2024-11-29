import "../Css/Productos.css"
import React, { useState } from "react";
import {useCart} from "../Context/CartContext"

const Productos = () => {
  const {addToCart} = useCart();

  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      genero: "accion",
      imagen: ["image1a.jpg", "image1b.jpg", "image1c.jpg"],
    },
    {
      id: 2,
      name: "Producto 2",
      price: 100,
      genero: "aventura",
      imagen: ["image1a.jpg", "image1b.jpg", "image1c.jpg"],
    },
    {
      id: 3,
      name: "Producto 3",
      price: 100,
      genero: "estrategia",
      imagen: ["image1a.jpg", "image1b.jpg", "image1c.jpg"],
    },
    {
      id: 4,
      name: "Producto 4",
      price: 100,
      genero: "deporte",
      imagen: ["image1a.jpg", "image1b.jpg", "image1c.jpg"],
    },
    {
      id: 5,
      name: "Producto 5",
      price: 100,
      genero: "gestion",
      imagen: ["image1a.jpg", "image1b.jpg", "image1c.jpg"],
    },
    {
      id: 6,
      name: "Producto 6",
      price: 100,
      genero: "simulador",
      imagen: ["image1a.jpg", "image1b.jpg", "image1c.jpg"],
    },
  ]
  return (
    <div className="productos">
      <div className="product-grid">
        {products.map((product)=>(
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  )
}

const ProductCard = ({ product, addToCart})=>{
  const [imageIndex, setImageIndex] = useState(0)

  const nextImage =()=>{
    setImageIndex((prevIndex)=>(prevIndex +1) % product.images.lenght)
  }

  const prevImage =()=>{
    setImageIndex((prevIndex)=>
    PrevIndex ===0 ? product.images.lenght - 1 : prevIndex - 1 
    )
  }
  return(
    <div className="card">
      <div className="image-container">
        <button className="arrow left" onClick={prevImage}>
          ◀
        </button>
        <img src={product.images[imageIndex]} alt={product.name} />
        <button className="arrow right" onClick={nextImage}>
          ▶
        </button>
      </div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={()=> addToCart(product)}>Agregar al carrito</button>
    </div>
  )
}
export default Productos