import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect,useRef } from 'react';

import Nav from "./components/nav";
import Home from "./home";
import ShoppingCart from './components/shoppingcart';
import Shop from './components/shop';

import image9 from './images/image-product-1-thumbnail.jpg';


function App() {

  
  const [iscartopen,setiscartopen] = useState(false); // currently used in Addtocart
  
  const [cartcounter,setcartcounter] = useState(0); //currently increase in Addtocart and read in Nav(top of cartimg)
  
  const [qtty,setqtty] = useState(1); //currently used in Countqtty inside home 
  
  const [children,setchildren] = useState([
   /*  {itemname:'Abor Krl',itemimg:image9,price :'$500'},
    {itemname:'kelprecious',itemimg:image9,price :'$500'}, */
  ])// used in shopping cart and addtocart to add/remove cart items

  const [total,settotal] = useState(0)


  
  return (
    <div className="App">            
      <BrowserRouter>
            <Nav iscartopen={iscartopen} setiscartopen={setiscartopen} cartcounter = {cartcounter} children = {children}
            setchildren = {setchildren}  qtty={qtty} setqtty={setqtty}   
            total = {total} settotal = {settotal} cartcounter = {cartcounter} setcartcounter = {setcartcounter}/>
            <Routes>
                <Route path = '/ecommerce-page/shop' element = { 
                  <Home  iscartopen={iscartopen} setiscartopen={setiscartopen} qtty={qtty} setqtty={setqtty} 
                  cartcounter = {cartcounter} setcartcounter = {setcartcounter}  /> 
                } />   
                <Route path = '/ecommerce-page' element = { 
                  <Shop iscartopen={iscartopen} setiscartopen={setiscartopen} qtty={qtty} setqtty={setqtty} 
                  cartcounter = {cartcounter} setcartcounter = {setcartcounter} children = {children}
                  setchildren = {setchildren} 
                  total = {total} settotal = {settotal} />
                } />                
            </Routes>
        </BrowserRouter>      
            
    </div>
  );
}

export default App;


