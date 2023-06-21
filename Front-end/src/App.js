import './App.css';
import {Routes, Route} from "react-router-dom";

import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ProductsList from './Productos/ProductsList';

function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products/productos' element={<ProductsList/>}/>
          <Route path='*' element={<img src='https://linube.com/blog/wp-content/uploads/error-404.jpg'/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
