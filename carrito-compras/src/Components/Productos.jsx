import "../Css/Productos.css";
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import Age from "../assets/Age.jpg";
import Cod6 from "../assets/COD6.jpg";
import Fh5 from "../assets/FH5.jpg";
import Fifa2024 from "../assets/FIFA2024.jpg";
import Gow from "../assets/GOW.jpg";
import Ron from "../assets/RoN.jpg";

const Productos = () => {
  const { addToCart } = useCart();

  // Estados para categoría seleccionada y término de búsqueda
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Lista de productos
  const products = [
    { id: 1, name: "Call Of Duty: Black Ops 6", price: 100, genero: "accion", image: Cod6 },
    { id: 2, name: "God Of War: Ragnarok", price: 100, genero: "aventura", image: Gow },
    { id: 3, name: "Forza Horizon 5", price: 100, genero: "autos", image: Fh5 },
    { id: 4, name: "Fifa 2024", price: 100, genero: "deporte", image: Fifa2024 },
    { id: 5, name: "Age Of Mythology", price: 100, genero: "estrategia", image: Age },
    { id: 6, name: "Ready or Not", price: 100, genero: "simulacion", image: Ron },
  ];

  // Filtrar productos según categoría y búsqueda
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "todos" || product.genero === selectedCategory;
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="container productos mt-4">
      {/* Filtros: Categoría y búsqueda */}
      <div className="filter-container mb-4">
        <label htmlFor="category" className="me-2">
          Categoría:
        </label>
        <select
          id="category"
          className="form-select w-auto d-inline me-4"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="accion">Acción</option>
          <option value="aventura">Aventura</option>
          <option value="autos">Autos</option>
          <option value="deporte">Deporte</option>
          <option value="estrategia">Estrategia</option>
          <option value="simulacion">Simulación</option>
        </select>

        <label htmlFor="search" className="me-2">
          Buscar:
        </label>
        <input
          type="text"
          id="search"
          className="form-control d-inline w-auto"
          placeholder="Escribe un nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="card h-100">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="card-img-top" />
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

