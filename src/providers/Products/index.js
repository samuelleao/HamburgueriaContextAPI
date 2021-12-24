import { createContext, useContext } from "react";

const ProductsContext = createContext();

const products = [
    {
        title: "Hambuguer",
        price: 15,
        category: 'Sanduíches',
        img: "",
        id: 1
    },
    {
        title: "X-Burgue",
        price: 15.40,
        category: 'Sanduíches',
        img: "",
        id: 2
    },
    {
        title: "Big Kenzie",
        price: 15,
        category: 'Sanduíches',
        img: "",
        id: 3
    },
    {
        title: "Fanta Guaraná",
        price: 15,
        category: 'Bebidas',
        img: "",
        id: 4
    }
];

const ProductsProvider = ({ children }) => {

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const UseProducts = () => {
    const context = useContext(ProductsContext);
    return context
}

export default ProductsProvider;