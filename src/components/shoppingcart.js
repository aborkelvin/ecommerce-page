import './shoppingcart.css'
import { useState,useEffect } from 'react';

import image9 from '../images/image-product-1-thumbnail.jpg';
import { Countqtty } from '../home';
import { Createcontent,Count } from './addtocart';

import deleteimg from '../images/deletebtn.svg';

function ShoppingCart(props){

  const [total,settotal] = [props.total,props.settotal];
  const [children,setchildren] = [props.children,props.setchildren];

  return(
    <div className = { `shoppingcart ${props.iscartopen?"showcart" : ""}` } >
        <h2>Cart</h2>
        <hr></hr>
        

        <div className= 'basket-content'>
            <ul className='basket'>
              {
                  children.map(function(item,i){
                    return (
                      <Createcontent key={item.itemname} itemname = {item.itemname}  itemimg = {item.itemimg} 
                      price = {item.price} total = {total} settotal = {settotal} children = {children}
                      setchildren = {setchildren}  cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter}
                      qtty = {item.qtty}
                     />
                    )
                  })
              }
            </ul>
            
            <h3 className = 'total' >${total}</h3>
            <button className= 'cursor checkout'>Checkout</button>
        </div>
    
    </div>
  )
}

export default ShoppingCart;