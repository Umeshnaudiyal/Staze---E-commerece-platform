
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Search from './pages/Search/search';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import { useState } from 'react';
import Refreshhandler from './pages/Refreshhandler/Refreshhandler';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  const navigate=useNavigate();
  const [isuserauthorized, setisuserauthorized] =useState(false);
  const Privateroute=({element})=>{
   return isuserauthorized?element:navigate('/');
  }
  return (

        <div className="App">
         <Header />
         <Refreshhandler isauth={setisuserauthorized}/>
          <main>
            <Routes>
              <Route path='/searchresult/:searchproducts' element={<Search/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Privateroute element={<Dashboard/>}/>} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/:name' element={<Navigate to={'/'}/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
            </Routes>
          </main>
          <Footer />
        </div>

  );
}

export default App;