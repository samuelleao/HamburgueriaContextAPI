import Navbar from './components/Navbar'
import { GlobalStyle } from './components/GlobalStyle'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
