import './addtocart.css'

import { useState,useEffect } from 'react';
import image5 from '../images/image-product-1-thumbnail.jpg';
import cartimg from '../images/icon-cart.svg';
import deleteimg from '../images/deletebtn.svg';
import { Countqtty } from '../home';

function Addtocart(props){
    

    const addtocart = () => {                       
        //if set to true, the showcart class is added to the shopping cart div making the display block
        if(props.iscartopen == false){
            props.setiscartopen(true);
        }
        
        //This should create the elements used to display the cart items and add it to cart
        let li = document.createElement('li');
        li.classList.add('item');
        
        let itemimg = new Image(50,50);
        itemimg.src = props.itemimg;  
        itemimg.classList.add('itemimg')
        
        let itemname = document.createElement('span');
        itemname.innerText = props.itemname;
        itemname.classList.add('itemname')

        let deletebtn = new Image(20,20);
        deletebtn.src= deleteimg;
        deletebtn.classList.add('deletebtn','cursor');

        let price = document.createElement('span');
        price.innerText = '$150.00';
        price.classList.add('price','figures')

        let quantity = document.createElement('span');
        quantity.innerText = ` x ${props.qtty}`;
        quantity.classList.add('quantity','figures')

        let subtotal = document.createElement('span');
        subtotal.innerText =  ` $${ 150 * props.qtty}`;
        subtotal.classList.add('subtotal','figures')



        let basket = document.querySelector('.basket');
        li.appendChild(itemimg);
        li.appendChild(itemname);
        li.appendChild(deletebtn);
        li.appendChild(price)
        li.appendChild(quantity)
        li.appendChild(subtotal)
        basket.appendChild(li);

        props.setcartcounter(props.cartcounter + 1);

    }


    return(
        <div className= 'additem cursor' onClick = {addtocart}>
            <img src= {cartimg} id='cartimg' />
            <span className = 'addtocartxt' >Add to cart</span>
        </div>
    )
}



function Createcontent(props){

    return(
        <li className = 'item'>
            <img src = {props.itemimg} className = 'itemimg' />
            <span className = 'itemname' >{props.itemname}</span>
            <img src = {deleteimg} className = 'deletebtn cursor' />
            <span className = 'price figures' > $150.00 </span>
            <span className = 'quantity figures' > {` x ${props.qtty}`} </span>
            <span className = 'subtotal figures' > {` $${ 150 * props.qtty}`} </span>
            <Countqtty />
        </li>
    )
}

export default Addtocart;