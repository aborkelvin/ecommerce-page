import './shoppingcart.css'
import { useState,useEffect } from 'react';

import image9 from '../images/image-product-1-thumbnail.jpg';

function ShoppingCart(props){

  /* 
  function emptycart(){
    let  emptyct = document.querySelector('.basket')
    console.log(document.querySelector('.basket').children.length)
    if(document.querySelector('.basket').children.length == 0){
      emptyct.innerHTML = 'Your cart is empty';
    }
  }

  useEffect( () =>{
    emptycart()
  })
 */

  return(
    <div className = { `shoppingcart ${props.iscartopen?"showcart" : ""}` } >
        <h2>Cart</h2>
        <hr></hr>
        <div className= 'basket-content'>
            <ul className='basket'>
                {/* <li className='item'>
                    <img src={image9} alt = 'shoe image' className=' itemimg' />
                    <span className='itemname'>Fall limited Edition Sneakers</span>
                    <span className='price figures'>$125.00</span>
                    <span className='quantity figures'>  x 3</span>
                    <span className = 'subtotal figures'>  $375.00</span>
                </li> */}
            </ul>
            <button className= 'cursor checkout'>Checkout</button>
        </div>
    
    </div>
  )
}

export default ShoppingCart;