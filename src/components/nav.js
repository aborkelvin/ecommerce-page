import { useState,useEffect } from 'react';

import logo from '../images/logo.svg';
import cartimg from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import './nav.css';
import ShoppingCart from './shoppingcart';

function Nav(props){

    return(
        <div className='nav-container'>            
            <img src={logo} className='logo'/>
            <nav>
                <ul>
                    <li><a href='#'>Collections</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>Men</a></li>
                </ul>
            </nav>
            <img src = {cartimg} className = 'cartimg'/>
            <img src = {avatar} className = 'avatar' />
            <ShoppingCart iscartopen={props.iscartopen} setiscartopen = {props.setiscartopen} />
        </div>
    )
}

export default Nav;