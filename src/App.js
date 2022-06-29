import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect } from 'react';

import Nav from "./components/nav";
import Home from "./home";
import ShoppingCart from './components/shoppingcart';
import Shop from './components/shop';


function App() {

  
  const [iscartopen,setiscartopen] = useState(false); // currently used in Addtocart
  const [cart,setCart] = useState({}); //not used yet

  const [cartcounter,setcartcounter] = useState(0); //currently increased in Addtocart and read in Nav(top of cartimg)
  
  const [qtty,setqtty] = useState(1); //currently used in Countqtty inside home
  //every sellable item in the shop page should have this of their own which their add to cart button will eventuallly read from


  return (
    <div className="App">            
      <BrowserRouter>
            <Nav iscartopen={iscartopen} setiscartopen={setiscartopen} cartcounter = {cartcounter} />
            <Routes>
                <Route path = '/' element = { 
                  <Home  iscartopen={iscartopen} setiscartopen={setiscartopen} qtty={qtty} setqtty={setqtty} 
                  cartcounter = {cartcounter} setcartcounter = {setcartcounter}  /> 
                } />   
                <Route path = '/shop' element = { 
                  <Shop iscartopen={iscartopen} setiscartopen={setiscartopen} qtty={qtty} setqtty={setqtty} 
                  cartcounter = {cartcounter} setcartcounter = {setcartcounter}/>
                } />                
            </Routes>
        </BrowserRouter>      
            
    </div>
  );
}

export default App;


