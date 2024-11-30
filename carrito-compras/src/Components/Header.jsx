import "../Css/Header.css"
import React, { useState } from "react"
import { useCart } from "../Context/CartContext"



const Header = () => {

    const {cart} = useCart()
    const [isBouncing, setIsBouncing] = useState (false)

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

    const handleCartAnimation = () =>{
        setIsBouncing(true)
        setTimeout(()=> setIsBouncing(false), 500)
    }

    React.useEffect(()=>{
        if (totalItems > 0){
            handleCartAnimation()
        }
    }, [totalItems])

  return (
    <div>
        <header className="header">
      <nav className="navbar">
        <h1 className="logo">GameShop</h1>
        <ul className="nav-links">
          <li className="Inicio">
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Cart" className={`cart-icon ${isBouncing ? "bounce" : ""}`}>
                🛒 <span className="cart-count">{totalItems}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header