import './shoppingcart.css'
import { useState,useEffect } from 'react';

import image9 from '../images/image-product-1-thumbnail.jpg';

function ShoppingCart(props){

  return(
    <div className = { `shoppingcart ${props.iscartopen?"showcart" : ""}` } >
        <h2>Cart</h2>
        <hr></hr>
        <div className= 'basket-content'>
            <ul className='basket'>
                <li className='item'>
                    <img src={image9} alt = 'shoe image' className='image9 itemimg' />
                    <span>Fall limited Edition Sneakers</span>
                </li>
            </ul>
        </div>
    
    </div>
  )
}

export default ShoppingCart;