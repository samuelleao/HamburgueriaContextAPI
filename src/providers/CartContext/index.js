import { createContext, useContext, useState} from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart = () => {
    const cartData = useContext(CartContext)
    return cartData
}

export default CartProvider;


