import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect } from 'react';

import Nav from "./components/nav";
import Home from "./home";
import ShoppingCart from './components/shoppingcart';


function App() {

  
  const [iscartopen,setiscartopen] = useState(false)
  const [cart,setCart] = useState({});
  return (
    <div className="App">            
      <BrowserRouter>
            <Nav iscartopen={iscartopen} setiscartopen={setiscartopen} />
            <Routes>
                <Route path = '/' element = { <Home  iscartopen={iscartopen} setiscartopen={setiscartopen} /> } />                
            </Routes>
        </BrowserRouter>      
            
    </div>
  );
}

export default App;


