import { useCart } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  
  const handleCheckout = () => {
    alert("¡Gracias por tu compra!");
    clearCart(); 
  };

  return (
    <div className="container my-5 cart-container">
      <h1 className="text-center mb-4">Tu Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <h4 className="mb-4">El carrito está vacío.</h4>
          <a href="/" className="btn btn-primary">
            Volver a la tienda
          </a>
        </div>
      ) : (
        <div>
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle">${item.price}</td>
                  <td className="align-middle">
                    <input
                      type="number"
                      className="form-control w-50 mx-auto"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                    />
                  </td>
                  <td className="align-middle">${item.price * item.quantity}</td>
                  <td className="align-middle">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary p-4 bg-light rounded-3 shadow-sm">
            <h3 className="text-center">Resumen de la compra</h3>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h5>Total:</h5>
              <h5 className="text-success">${calculateTotal()}</h5>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-danger" onClick={clearCart}>
                Vaciar Carrito
              </button>
              <button className="btn btn-success" onClick={handleCheckout}>
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;