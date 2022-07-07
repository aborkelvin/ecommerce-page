import './shoppingcart.css'
import { useState,useEffect } from 'react';

import image9 from '../images/image-product-1-thumbnail.jpg';
import { Countqtty } from '../home';
import { Createcontent } from './addtocart';



function ShoppingCart(props){

  const [total,settotal] = [props.total,props.settotal];

  const [children,setchildren] = [props.children,props.setchildren];



  return(
    <div className = { `shoppingcart ${props.iscartopen?"showcart" : ""}` } >
        <h2>Cart</h2>
        <hr></hr>
        

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
            
            <h3>Total: {total}</h3>
            <button className= 'cursor checkout'>Checkout</button>
        </div>
    
    </div>
  )
}

export default ShoppingCart;