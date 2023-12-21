import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext(null)

export const useCart = () => { 
    const context = useContext(CartContext)
    return context
 }

export const CartContextProvider = ({children}) => { 
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const [cartItems, setCartItems] = useState(storedCartItems)
    const [totalCartItems, setTotalCartItems] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        const { id, name, description, img, price, age, size, brand, weight, med } = item
        const index = cartItems.findIndex((product) => product.id === id)
        if (index !== -1) {
            const cartItemsCopy = [...cartItems]
            cartItemsCopy[index].quantity += quantity
            cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price
            setCartItems(cartItemsCopy)
        } else {
            const newItem = {
                id,
                name,
                img,
                description,
                price,
                quantity,
                subTotal: quantity * price
            }
            setCartItems([...cartItems, newItem])
        }
    }
    const clearCartItems = () => {
        setCartItems([])
    }

    const removeItem = (id) => {
        const arrayFilter = cartItems.filter((item) => item.id !== id)
        setCartItems(arrayFilter)
    }

    const updateItemQuantity = (id, newQuantity) => {
        const updatedCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity, subTotal: newQuantity * item.price } : item
        )
    
        setCartItems(updatedCartItems)
    }

    const handleTotal = () => {
        const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
        setTotalCartItems(total)
    }

    const handleTotalQuantity = () => {
        const total = cartItems.reduce((acum, item) => acum + item.quantity, 0)
        setTotalQuantity(total)
    }

    useEffect(() => { 
        handleTotal()
        handleTotalQuantity()
     }, [cartItems])
    useEffect(() => { 
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
     }, [cartItems])

    const contextValue = {
        cartItems,
        totalQuantity,
        totalCartItems,
        clearCartItems,
        addItem,
        removeItem,
        updateItemQuantity
    }

    return <CartContext.Provider value={contextValue}> {children} </CartContext.Provider>
}