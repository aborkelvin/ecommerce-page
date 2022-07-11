import './addtocart.css'

import { useState,useEffect,useRef } from 'react';
import image5 from '../images/image-product-1-thumbnail.jpg';
import cartimg from '../images/icon-cart.svg';
import deleteimg from '../images/deletebtn.svg';
import { Countqtty } from '../home';

import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';


function Addtocart(props){

    const [children,setchildren] = [props.children,props.setchildren];

    const addtocart = () => {                       
        //if set to true, the showcart class is added to the shopping cart div making the display block
        if(props.iscartopen == false){
            props.setiscartopen(true);
        }
        
        
        const[itemname,itemimg,price]  = [props.itemname,props.itemimg,props.price];        
        const details = { 
            itemname : itemname, 
            itemimg : itemimg,
            price: price 
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



function Createcontent(props){

    const [qtty,setqtty] = useState(props.qtty? props.qtty: 1); 
    
    let [total,settotal] = [props.total,props.settotal]
    const [children,setchildren] = [props.children,props.setchildren];

    var currency = props.price;
    currency = currency.replace(/[$]/,"");
    currency = Number(currency);


    const prevqtty = usePrevious(qtty)
    useEffect(()=>{ 
        /*
        Gets the change in qtty, multiplies it with the currency to get change in amount,
        if the was no change in qtty(when addtocart is first called),it sets total with the currency else
        it sets total with the change in amount(this takes care of decrease in qtty)
        */
        let qttydifference = qtty - prevqtty;
        let addingamnt = currency * qttydifference;
        let initialamt = currency * qtty;

        if(isNaN(addingamnt)){
            updatetotal(initialamt)
        }else{
            updatetotal(addingamnt)
        }
        
        //remove item from cart if it's qtty is reduced to zero
        if(qtty == 0){
            deletelist(props.itemname)
        }
        
    },[qtty])

    
    function updatetotal(current){
        /* state updating refused to work till I updated it this way,doing it the normal way, it updated them
        individually, making me have different versions of same state */
        settotal(total => total+current )
        
    }


    function deletelist(name){
        const todos = children.filter(item => item.itemname !== name)        
        setchildren(todos);

        //remove its price from total
        let currentamt = currency * qtty;
        settotal(total => total - currentamt);

        //reduce qtty showing in cart icon
        props.setcartcounter(props.cartcounter - 1);
    }

    return(
        <li className = 'item'  >
            <img src = {props.itemimg} className = 'itemimg' />
            <span className = 'itemname' >{props.itemname}</span>
            <img src = {deleteimg} className = 'deletebtn cursor' onClick = { () =>{deletelist(props.itemname)} } />
            <span className = 'price figures' > {props.price} </span>
            <span className = 'quantity figures' > {` x ${qtty}`} </span>
            <span className = 'subtotal figures' > {` $${ currency * qtty}`} </span>
            <Count qtty = {qtty} setqtty = {setqtty} />
        </li>
    )
}


const Count = (props) =>{    
    function increase(){        
        props.setqtty(props.qtty+1);                   
    }
    function decrease() {
        if(props.qtty == 0){
            alert('cant reduce further')
            return;
        }
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



//used to get qtty's previous value
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    },[value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
}


export default Addtocart;

export {Createcontent}
