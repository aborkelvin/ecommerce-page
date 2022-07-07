import { useState,useEffect } from 'react';

import logo from '../images/logo.svg';
import cartimg from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import './nav.css';
import ShoppingCart from './shoppingcart';
import { Link } from 'react-router-dom';

function Nav(props){
    
    function showcart() {
        //if set to true, the showcart class is added to the shopping cart div making the display block
        if(props.iscartopen == false){
            props.setiscartopen(true);
        }else{
            props.setiscartopen(false)
        }
    }

    return(
        <div className='nav-container'>            
            <img src={logo} className='logo' />
            <nav>
                <ul>
                    <Link to = '/ecommerce-page/shop'>
                        <li>Shop</li> 
                    </Link>
                    <Link to = '/ecommerce-page'>
                        <li>Collections</li>
                    </Link>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>Men</a></li>
                </ul>
            </nav>
            <img src = {cartimg} className = 'cartimg cursor' onClick = {showcart} />
            <div className= 'cartcounter cursor' onClick = {showcart}>{props.cartcounter}</div>
            <img src = {avatar} className = 'avatar' />
            <ShoppingCart iscartopen={props.iscartopen} setiscartopen = {props.setiscartopen} children = {props.children}
            setchildren = {props.setchildren} qtty={props.qtty} setqtty = {props.setqtty} childtoparent = {props.childtoparent}  
            total = {props.total} settotal = {props.settotal} />
        </div>
    )
}

export default Nav;