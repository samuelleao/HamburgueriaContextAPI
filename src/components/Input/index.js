import { InputWrapper } from './style'
import Button from '../Button'
import { SearchValues } from '../../providers/SearchProducts'
import { UseProducts } from '../../providers/Products'

function InputGroup({placeholder, value, ...rest}) {
    
    const { setSearchProducts } = SearchValues();
    const { products } = UseProducts();

    const initSearchProducts = (value) => {

        if(value !== ''){
            let textContains = products.filter(product => {
                return product.title.includes(`${value}`)
            })
    
            setSearchProducts(
                [...textContains]
            )
            
        }else{
            setSearchProducts([
                ...products
            ]) 
        }
        
    }

    return (
        <InputWrapper>
            <input placeholder={placeholder} {...rest}/>
            <Button size="40" type="primary" onClick={()=>{ initSearchProducts(value) }}>Pesquisar</Button>
        </InputWrapper>
    )
}

export default InputGroup;