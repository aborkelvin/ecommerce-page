import './shoppingcart.css'
import { useState,useEffect } from 'react';

import image9 from '../images/image-product-1-thumbnail.jpg';

function ShoppingCart(){

  return(
    <div className ='shoppingcart'>
        <h2>Cart</h2>
        <hr></hr>
        <div className= 'basket-content'>
            <ul>
                <li>
                    <img src={image9} alt = 'shoe image' className='image9' />
                    <span>Fall limited Edition Sneakers</span>
                </li>
            </ul>
        </div>
    
    </div>
  )
}

export default ShoppingCart;