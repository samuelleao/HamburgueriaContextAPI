import React, { useState } from "react";
import {NavBarWrapper, NavbarContent} from './style'
import {Container} from '../GlobalStyle'
import Logo from '../../assets/img/logo.svg'
import InputGroup from "../Input";
import { UseProducts } from '../../providers/Products'

const Navbar = () => {

    const {products} = UseProducts();

    const [searchValue, setSearchValue] = useState([])

    const search = (value) =>{
        setSearchValue(value)
    }

    return (
    <NavBarWrapper>
        <Container>
            <NavbarContent>
                <img src={Logo} alt="Burguer Kenzie" title="Burguer Kenzie" />
                <InputGroup 
                    placeholder="Pesquisar por" onChange={(e) => { search(e.target.value)}} 
                    value={searchValue} 
                    products={products}
                />
            </NavbarContent>
        </Container>
    </NavBarWrapper>
    )
}

export default Navbar;