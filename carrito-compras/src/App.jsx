import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import Carrito from "./Pages/Carrito";

function App() {
  return (
    <CartProvider>
      <ToastContainer /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carrito />} /> 
      </Routes>
    </CartProvider>
  );
}

export default App;
