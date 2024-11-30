import {createContext, useState, useEffect, useContext} from "react";

const CartContext = createContext();

export const useCart = ()=> useContext(CartContext);

const CART_STORAGE_KEY = "shopping_cart";

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const storedCart = localStorage.getItem(CART_STORAGE_KEY)
        if (storedCart) setCart(JSON.parse(storedCart))
    }, [])

    useEffect(()=>{
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) =>{
        setCart((prev)=>{
            const existing = prev.find((item)=> item.id === product.id)
            if (existing){
                return prev.map((item)=>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
                )
            }
            return [...prev, { ...product, quantity: 1}]
        })
    }

    const removeFromCart = (id) =>{
        setCart((prev)=> prev.filter((item)=> item.id !== id))
    }

    const updateQuantity = (id, quantity) =>{
        setCart((prev)=>
            prev.map((item)=>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        )
    }

    const clearCart = () => setCart([])

    return(
        <CartContext.Provider
        value={{cart, addToCart, removeFromCart, updateQuantity, clearCart}}
        >
            {children}
        </CartContext.Provider>
    )
}