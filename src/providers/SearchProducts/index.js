import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchProducts, setSearchProducts] = useState([])

    return (
        <SearchContext.Provider value={{ searchProducts, setSearchProducts }}>
            {children}
        </SearchContext.Provider>
    )
}

export const SearchValues = () => {
    const searchValue = useContext(SearchContext);
    return searchValue
}

export default SearchProvider;