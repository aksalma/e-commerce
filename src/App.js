import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBarHome from './Composants/NavBar/Navbar';
import Home from './Composants/Pages/Home';
import Women from './Composants/Category/women/womenproduct';
import { Shop } from './Composants/Pages/Men/shop';
import Kids from './Composants/Category/kids/kidsproduct';
import { Cart } from './Composants/Pages/Cart/cart';
import LoginSignup from './Composants/Pages/Auth/LoginSignUp';
import { ShopContextProvider } from './Composants/context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womens" element={<Women />} />
          <Route path="/mens" element={<Shop />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/LoginSignUp" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
