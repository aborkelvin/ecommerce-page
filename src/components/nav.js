import { useState,useEffect } from 'react';

import logo from '../images/logo.svg';
import cartimg from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import menuicon from '../images/icon-menu.svg'
import closebar from '../images/icon-close.svg'
import './nav.css';
import ShoppingCart from './shoppingcart';
import { Link } from 'react-router-dom';

function Nav(props){
    
    const[shownav,setshownav] = useState(false);
    
    function showcart() {
        //if set to true, the showcart class is added to the shopping cart div making the display block
        if(props.iscartopen == false){
            props.setiscartopen(true);
        }else{
            props.setiscartopen(false)
        }
    }

    function openmenu(){
        if(shownav == false){
            setshownav(true);
        }
    }

    function closemenu(){
        if(shownav == true){
            setshownav(false);
        }
    }

    


    return(
        <div className='nav-container'>
            <img src = {menuicon} className = 'menuicon cursor' onClick = {openmenu} />            
            <img src={logo} className='logo' />
            <nav className = {`headnav ${shownav?"shownav":''}`} >
                <ul>
                    <img src = {closebar} className = 'closebar cursor' onClick = {closemenu} />
                    <Link to = '/ecommerce-page'>
                        <li>Shop</li> 
                    </Link>
                    <Link to = '/ecommerce-page/shop'>
                        <li>Collections</li>
                    </Link>                                        
                    <li>Women </li>                    
                    <li>Men</li>
                </ul>
            </nav>
            <img src = {cartimg} className = 'cartimg cursor' onClick = {showcart} />
            <div className= 'cartcounter cursor' onClick = {showcart}>{props.cartcounter}</div>
            <img src = {avatar} className = 'avatar' />
            <ShoppingCart iscartopen={props.iscartopen} setiscartopen = {props.setiscartopen} children = {props.children}
            setchildren = {props.setchildren} qtty={props.qtty} setqtty = {props.setqtty} total = {props.total} 
            settotal = {props.settotal} cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} />
        </div>
    )
}

export default Nav;