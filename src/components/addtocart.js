import './addtocart.css'

import { useState,useEffect } from 'react';
import image5 from '../images/image-product-1-thumbnail.jpg';
import cartimg from '../images/icon-cart.svg';
import deleteimg from '../images/deletebtn.svg';

function Addtocart(props){


    const addtocart = () => {                       
        //if set to true, the showcart class is added to the shopping cart div making the display block
        if(props.iscartopen == false){
            props.setiscartopen(true);
        }else{
            props.setiscartopen(false)
        }
        
        //This should create the elements used to display the cart items and add it to cart
        let li = document.createElement('li');
        li.classList.add('item');
        
        let itemimg = new Image(50,50);
        itemimg.src = props.itemimg;  
        
        let itemname = document.createElement('span');
        itemname.innerText = props.itemname;

        let deletebtn = new Image(20,20);
        deletebtn.src= deleteimg;
        deletebtn.classList.add('deletebtn','cursor');

        let basket = document.querySelector('.basket');
        li.appendChild(itemimg);
        li.appendChild(itemname);
        li.appendChild(deletebtn);
        basket.appendChild(li);

    }


    return(
        <div className= 'additem cursor' onClick = {addtocart}>
            <img src= {cartimg} id='cartimg' />
            <span>Add to cart</span>
        </div>
    )
}

export default Addtocart;