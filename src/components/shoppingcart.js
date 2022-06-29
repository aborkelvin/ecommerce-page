import './shoppingcart.css'
import { useState,useEffect } from 'react';

import image9 from '../images/image-product-1-thumbnail.jpg';
import { Countqtty } from '../home';
import { Createcontent } from './addtocart';


const Input = () => {
  return <input placeholder="Your input here" className='input'  />;
};

function ShoppingCart(props){

  //currently used in Countqtty inside home
  const [qtty,setqtty] = useState(1); 
  //This is a duplicate brought here to try adding it to cart

  const [children,setchildren] = [props.children,props.setchildren];

  function onAddBtnClick() {
    setchildren(children.concat(<Createcontent key={children.length} itemname = {'dubem'}  itemimg = {image9} />));
  };

  return(
    <div className = { `shoppingcart ${props.iscartopen?"showcart" : ""}` } >
        <h2>Cart</h2>
        <hr></hr>
        <button onClick = {onAddBtnClick} >Add child</button>

        <div className= 'basket-content'>
            <ul className='basket'>
                {/* <li className='item'>
                    <img src={image9} alt = 'shoe image' className=' itemimg' height = '50px'/>
                    <span className='itemname'>Fall limited Edition Sneakers</span>
                    <span className='price figures'>$125.00</span>
                    <span className='quantity figures'>  x 3</span>
                    <span className = 'subtotal figures'>  $375.00</span>
                    
                </li> */}
                {children}
            </ul>
            <button className= 'cursor checkout'>Checkout</button>
        </div>
    
    </div>
  )
}

export default ShoppingCart;