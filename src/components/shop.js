import { useState,useEffect } from "react";
import './shop.css';
import Addtocart from "./addtocart";
import { Countqtty } from "../home";

import image1 from '../images/nike.jpg'
import image2 from '../images/nike dunk.jpg'
import image3 from '../images/airforce1.jpg'
import image4 from '../images/nikex2md.jpg'
import image5 from '../images/airjordan1.jpg'
import image6 from '../images/airforce1uv.jpg'
import image7 from '../images/airforce1black.jpg'

function Shop(props){


    return(
        <div className = 'shop'>
            <Saleitem  img = {image1} name = 'Nike Airforce 1 White' 
              iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image1} 
                qtty={props.qtty} setqtty={props.setqtty} 
              cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} price= '$500'
              children = {props.children} setchildren = {props.setchildren}/>

            <Saleitem  img = {image2} name='Nike Dunk Low Black White Panda' 
             iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image1} 
             qtty={props.qtty} setqtty={props.setqtty} 
             cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter}  
             children = {props.children} setchildren = {props.setchildren} price= '$300' />

            <Saleitem  img = {image3} name='Nike Airforce 1 Supreme White' 
             iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image1} qtty={props.qtty} 
             setqtty={props.setqtty} cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} 
             children = {props.children} setchildren = {props.setchildren} price= '$250' />

            <Saleitem  img = {image5} name='Air Jordan 1 Mid White Black Royal' 
            iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image1} 
            qtty={props.qtty} setqtty={props.setqtty} 
            cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter}  
            children = {props.children} setchildren = {props.setchildren} price= '$109' />

            <Saleitem  img = {image6} name='Nike Airforce 1 UV Reactive swoosh' 
            iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image1} 
            qtty={props.qtty} setqtty={props.setqtty} 
            cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} 
            children = {props.children} setchildren = {props.setchildren} price= '$350' />    
            
            <Saleitem  img = {image7} name='Nike Airforce 1 Supreme Black'  
            iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image1} 
             qtty={props.qtty} setqtty={props.setqtty} 
            cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter}
            children = {props.children} setchildren = {props.setchildren} price= '$170' />
        </div>
    )
}

function Saleitem(props){

    return(
        <div className= 'saleitem'>
            <img src = {props.img} alt = 'selling items' />
            <h3>{props.name}</h3>
            <h4>{props.price? props.price:'$200.00'}</h4>
            <Addtocart iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={props.img} 
            itemname = {props.name} qtty={props.qtty} setqtty={props.setqtty} 
            cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} children = {props.children}
            setchildren = {props.setchildren} price = {props.price} />
        </div>
    )
}



export default Shop;