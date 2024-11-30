import "../Css/Productos.css";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import {toast} from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css";
import Age from "../assets/Age.jpg";
import Cod6 from "../assets/COD6.jpg";
import Fh5 from "../assets/FH5.jpg";
import Fifa2024 from "../assets/FIFA2024.jpg";
import Gow from "../assets/GOW.jpg";
import Ron from "../assets/RoN.jpg";

const Productos = () => {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState ("todos")

  const products = [
    {
      id: 1,
      name: "Call Of Duty: Black Ops 6",
      price: 100,
      genero: "accion",
      images: [Cod6, Gow],
    },
    {
      id: 2,
      name: "God Of War: Ragnarok",
      price: 100,
      genero: "aventura",
      images: [Gow, Age],
    },
    {
      id: 3,
      name: "Forza Horizon 5",
      price: 100,
      genero: "autos",
      images: [Fh5, Ron],
    },
    {
      id: 4,
      name: "Fifa 2024",
      price: 100,
      genero: "deporte",
      images: [Fifa2024, Fh5],
    },
    {
      id: 5,
      name: "Age Of Mythology",
      price: 100,
      genero: "gestion",
      images: [Age, Fifa2024],
    },
    {
      id: 6,
      name: "Ready or Not",
      price: 100,
      genero: "simulador",
      images: [Ron, Cod6],
    },
  ];

  const filteredProducts = 
  selectedCategory === "todos"
  ? products
  : products.filter(product => product.genero === selectedCategory);

  return (
    <div className="container productos mt-4">
      <div className="filter-containet mb-4">
        <label htmlFor="category">
          Categoría:
        </label>
        <select id="category" 
        className="form-select w-auto d-inline"
        onChange={(e)=> setSelectedCategory(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="accion">Acción</option>
          <option value="aventura">Aventura</option>
          <option value="autos">Autos</option>
          <option value="deporte">Deporte</option>
          <option value="estrategia">Estrategia</option>
          <option value="simulacion">Simulación</option>
        </select>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = ()=>{
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`, {
      position: "top-right",
      autoClose: 2000,
    })
  }
  return (
    <div className="card h-100">
      <div id={`carousel-${product.id}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {product.images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={image} className="d-block w-100" alt={product.name} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carousel-${product.id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carousel-${product.id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Productos;

