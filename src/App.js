import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect,useRef } from 'react';

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

  const [children,setchildren] = useState([])// used in shopping cart to append li components


  const [total,settotal] = useState(0)

/*   function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevtotal = usePrevious(total);
 */

  const childtoparent = (childdata) =>{
    //console.log(prevtotal)
    
    settotal(total+ 1000);
    
    console.log(childdata);
    console.log(total)
  }


  return (
    <div className="App">            
      <BrowserRouter>
            <Nav iscartopen={iscartopen} setiscartopen={setiscartopen} cartcounter = {cartcounter} children = {children}
            setchildren = {setchildren}  qtty={qtty} setqtty={setqtty} childtoparent = {childtoparent}  
            total = {total} settotal = {settotal}   />
            <Routes>
                <Route path = '/ecommerce-page/shop' element = { 
                  <Home  iscartopen={iscartopen} setiscartopen={setiscartopen} qtty={qtty} setqtty={setqtty} 
                  cartcounter = {cartcounter} setcartcounter = {setcartcounter}  /> 
                } />   
                <Route path = '/ecommerce-page' element = { 
                  <Shop iscartopen={iscartopen} setiscartopen={setiscartopen} qtty={qtty} setqtty={setqtty} 
                  cartcounter = {cartcounter} setcartcounter = {setcartcounter} children = {children}
                  setchildren = {setchildren} childtoparent = {childtoparent} 
                  total = {total} settotal = {settotal} />
                } />                
            </Routes>
        </BrowserRouter>      
            
    </div>
  );
}

export default App;


