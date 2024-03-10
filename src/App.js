import './App.css';
import Navbar from './Components/NavBar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<ShopCategory category="men"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory category="kids"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Loginsignup/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
