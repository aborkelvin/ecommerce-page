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

    const [currentimg ,setcurrentimg] = useState(image1);
    const [price,setprice] = useState('$125.00');

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
         <h3>{price} <span>50%</span></h3>
         <h4>$250.00</h4>
         <div className='check'> 
            <Countqtty qtty = {props.qtty} setqtty = {props.setqtty} />

           <Addtocart iscartopen={props.iscartopen} setiscartopen={props.setiscartopen} itemimg={image5} 
            itemname = 'Autumn Edition Limited Sneakers' qtty={props.qtty} setqtty={props.setqtty} 
            cartcounter = {props.cartcounter} setcartcounter = {props.setcartcounter} price = {price}
            children = {props.children} setchildren = {props.setchildren}  />

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


function Addtocart(props){

    const [children,setchildren] = [props.children,props.setchildren];

    const addtocart = () => {                       
        //if set to true, the showcart class is added to the shopping cart div making the display block
        if(props.iscartopen == false){
            props.setiscartopen(true);
        }
                
        const[itemname,itemimg,price,qtty]  = [props.itemname,props.itemimg,props.price,props.qtty];        
        const details = { 
            itemname : itemname, 
            itemimg : itemimg,
            price: price,
            qtty: qtty,
        }
        
        //prevents initial qtty from being less than one
        if(props.qtty<1){
            alert('Quantity cant be less than one, one item will be added')
            delete details.qtty;            
        }

        /* Prevents multiple items with same names, as the names are the keys and also the unique identifiers 
            for deleting items
        */
        for(let i = 0;i<children.length;i++){
            if(children[i].itemname == itemname){
                alert('Item with this name already exists in cart');
                return                
            }
        }

        setchildren(children => [...children, details ]);
        props.setcartcounter(props.cartcounter + 1);



    }


    return(
        <div className= 'additem cursor' onClick = {addtocart} >
            <img src= {cartimg} id='cartimg' />
            <span className = 'addtocartxt' >Add to cart</span>
        </div>
    )
}


