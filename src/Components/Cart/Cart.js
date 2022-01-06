import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Cart.css'
function Cart() {
        const [cartproduct , setCartproduct]= useState(localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[]);
        const [itemprice , setItemprice]=useState();
        let i=0;
        const additem=(product)=>{
            for(i;i<cartproduct.length;i++){
                if(cartproduct[i].id ===product.id)
                {
                    cartproduct[i].quantity+=1;
                    // flag = true;
                    localStorage.setItem("cartitems",JSON.stringify(cartproduct));
                    setCartproduct(JSON.parse(localStorage.getItem("cartitems")));

                }
            }

        }
        const addtototalprice=()=>{

        }
        const decreaseitem=(product)=>{
            for(i;i<cartproduct.length;i++){
                if(cartproduct[i].id ===product.id)
                {
                    if(cartproduct[i].quantity>1)
                    {
                    cartproduct[i].quantity-=1;
                    // flag = true;
                    localStorage.setItem("cartitems",JSON.stringify(cartproduct));
                    setCartproduct(JSON.parse(localStorage.getItem("cartitems")));
                    }
                    else if(cartproduct[i].quantity==1)
                    {
                    cartproduct.splice(i,1);
                    localStorage.setItem("cartitems",JSON.stringify(cartproduct));
                    setCartproduct(JSON.parse(localStorage.getItem("cartitems")));
                    }
                }

            }
       
        }
    return (
        <div>
            <div className='container-cart'>
           {
               cartproduct.map((element,index)=>{
                   return(
                <div className='product'>
                    <img src={element.urll}/>
                    <h4>{element.title}</h4>
                    <div className='desc'>
                    

                   <button onClick={()=>decreaseitem(element)}>-</button> <h5>{element.quantity}</h5> <button onClick={()=>additem(element)}>+</button>
                    
                    </div>
                   
                </div>)
               })
           } 
           <Link to="/cards"><button>add items</button></Link> <h1>Total:${cartproduct.reduce((total,item) => total + item.quantity * item.price, 0)}</h1>
            </div>
        </div>
    )
}

export default Cart
