import './home.css';
//import Addtocart from './components/addtocart';
import cartimg from './images/icon-cart.svg';
import deleteimg from './images/deletebtn.svg';

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

    const [currentthumbnail,setcurrentthumbnail] = useState({
        img5:true,
        img6:false,
        img7:false,
        img8:false
    })

    const [currentimg ,setcurrentimg] = useState(image1)

    function changecurrent(e){
        if(e.target.className.includes('image5')){
            setcurrentimg(image1);
            setcurrentthumbnail({
                img5:true , img6:false, img7:false, img8:false
            })
        }else if(e.target.className.includes('image6')){
            setcurrentimg(image2);
            setcurrentthumbnail({
                img5:false , img6:true, img7:false, img8:false
            })
        }else if(e.target.className.includes('image7')){            
            setcurrentimg(image3);
            setcurrentthumbnail({
                img5:false, img6:false, img7:true, img8:false
            })
        }else if(e.target.className.includes('image8')){            
            setcurrentimg(image4);
            setcurrentthumbnail({
                img5:false , img6:false, img7:false, img8:true
            })
        }
    }


    /* This listens to the whole homepage to remove the cart,will be added to all pages, a better    
    alternative should be found */
    function closecart(e) {
        let state = e.target.className;
        if(!state.includes('additem')&&!state.includes('addtocartxt')&&!state.includes('cartimg')&&props.iscartopen == true ){            
                props.setiscartopen(false);            
            
        }    
    }

    

    return (
    <div className="home" onClick = {closecart} >      
      <section className='homeimgs'>
        <img src = {currentimg } className='image1' alt='Image on display' />
        <img src = {image5} className = {`image5 thumbnail-img ${currentthumbnail.img5? 'currentimg':''} ` } 
           onClick = {changecurrent} />
        <img src = {image6} className = {`image6 thumbnail-img ${currentthumbnail.img6? 'currentimg':''} ` } 
           onClick = {changecurrent} />
        <img src = {image7} className = {`image7 thumbnail-img ${currentthumbnail.img7? 'currentimg':''} ` } 
           onClick = {changecurrent} />
        <img src = {image8} className = {`image8 thumbnail-img ${currentthumbnail.img8? 'currentimg':''} ` } 
           onClick = {changecurrent} />
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
            <Countqtty qtty = {props.qtty} setqtty = {props.setqtty} />

           <Addtocart iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image5} 
            itemname = 'Autumn Edition Limited Sneakers' qtty={props.qtty} setqtty={props.setqtty} 
            cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} price = '$109' />

         </div>
      </section>
    </div>
  );
}

//making the quantity increase a component incase it needs to be reused
const Countqtty = (props) =>{    

    function increase(){        
        props.setqtty(prevState => prevState+1);                   
    }
    function decrease() {
        props.setqtty(props.qtty-1);
    }
    

    return(
        <div className='pricing'>
            <img src= {minus} className='minus cursor' onClick={decrease} />
            <span className='countqtty'>{props.qtty}</span>
            <img src= {plus} className='plus cursor' onClick = {increase} />
        </div>
    )
}


export default Home;
export {Countqtty}














function Addtocart(props){

    const [children,setchildren] = [props.children,props.setchildren];

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


        /* setchildren(children.concat(<Createcontent key={children.length} itemname = {props.itemname}  itemimg = {props.itemimg} 
            qtty = {props.qtty} />)); */


    }


    return(
        <div className= 'additem cursor' onClick = {addtocart} >
            <img src= {cartimg} id='cartimg' />
            <span className = 'addtocartxt' >Add to cart</span>
        </div>
    )
}


