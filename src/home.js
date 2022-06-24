import './home.css';
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
import cartimg from './images/icon-cart.svg';

function Home() {



  
  return (
    <div className="home">      
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
           <div className= 'additem'>
            <img src= {cartimg} id='cartimg' />
            Add to cart
           </div>
         </div>
      </section>
    </div>
  );
}

export default Home;
