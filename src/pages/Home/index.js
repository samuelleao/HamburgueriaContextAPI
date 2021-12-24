import ProductCard from '../../components/ProductCard'
import { ProductWrapperCards } from '../../components/ProductWrapperCards'
import Cart from '../../components/Cart'
import { HomeContainer } from './style'
import { SearchValues } from '../../providers/SearchProducts'
import { UseProducts } from '../../providers/Products'

const Home = () => {

  const { searchProducts } = SearchValues();
  const { products } = UseProducts();

  return (
    <>
      <HomeContainer>
        <ProductWrapperCards>
          {
            searchProducts.length > 0 ?
              <ProductCard products={searchProducts} />
              :
              <ProductCard products={products} />}
        </ProductWrapperCards>
        <Cart />
      </HomeContainer>
    </>
  );
}

export default Home;
