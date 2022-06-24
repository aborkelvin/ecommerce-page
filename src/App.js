import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect } from 'react';

import Nav from "./components/nav";
import Home from "./home";
import ShoppingCart from './components/shoppingcart';


function App() {


  return (
    <div className="App">            
      <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path = '/' element = { <Home/> } />                
            </Routes>
        </BrowserRouter>      
            
    </div>
  );
}

export default App;


