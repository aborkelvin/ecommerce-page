import './home.css';
import Addtocart from './components/addtocart';
import { useState,useEffect } from 'react';

import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'

import image5 from './images/image-product-1-thumbnail.jpg'
import image6 from './images/image-product-2-thumbnail.jpg'
import image7 from './images/image-product-3-thumbnail.jpg'
import image8 from './images/image-product-4-thumbnail.jpg'

import minus from './images/icon-minus.svg';
import plus from './images/icon-plus.svg';



function Home(props) {

    /* This adds an eventlistener to the whole homepage to remove the cart,will be added to all pages, a better
        alternative should be found */
    function closecart() {
        if(props.iscartopen == true){
            props.setiscartopen(false);
            /* alert('closed') */
        } 
    }
    useEffect(()=>{
        let home = document.querySelector('.home');
        home.onclick= function(){
            closecart() ;
        }
    },[props.iscartopen]);


    return (
    <div className="home" >      
      <section className='homeimgs'>
        <img src = {image1 } className='image1' alt='Image on display' />
        <img src = {image5}  className = 'image5 thumbnail-img' />
        <img src = {image6} className = 'image6 thumbnail-img' />
        <img src = {image7} className = 'image7 thumbnail-img' />
        <img src = {image8} className = 'image8 thumbnail-img' />
      </section>
      <section className='hometxt'>
         <h1>SNEAKER COMPANY</h1>
         <h2>Fall Limited Edition Sneakers</h2>
         <p>These low-profile sneakers are your perfect casual wear companion. Featuring
           a durable rubber outer sole, they'll withstand everything the weather can offer.
         </p>
         <h3>$125.00 <span>50%</span></h3>
         <h4>$250.00</h4>
         <div className='check'> 
           <div className='pricing'>
              <img src= {minus} />
              0
              <img src= {plus} />
           </div>
           
           <Addtocart iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image5} 
            itemname = 'Autumn Edition Limited Sneakers' />

         </div>
      </section>
    </div>
  );
}

export default Home;
