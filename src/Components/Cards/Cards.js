import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Cards.css'
function Cards() {
    const [item ,setItem] =useState(0);

    const itemadded =[];

    const card=[{ id:'1',title:"bag",urll:'https://cf.shopee.ph/file/76a2d7ba8e51700f995a4a185c0774be',description:'for girl',price:40},
        {id:'2',title:'bag',urll:"https://cf.shopee.ph/file/76a2d7ba8e51700f995a4a185c0774be",description:'gor boy',price:23},
        {id:'3',title:'toy',urll:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2017%2F10%2F12232106%2Ficecreamcart-315.jpg" , description:'for babies between 2 and 3',price:42}
        ,{ id:'4',title:"bag",urll:'https://cf.shopee.ph/file/76a2d7ba8e51700f995a4a185c0774be',description:'for girl',price:30},
        {id:'5',title:"bag",urll:"https://cf.shopee.ph/file/76a2d7ba8e51700f995a4a185c0774be",description:'gor boy',price:32},
        {id:'6',title:'toy',urll:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2017%2F10%2F12232106%2Ficecreamcart-315.jpg" , description:'for babies between 2 and 3',price:24}]
        

        const addtocart=(product)=>{
            let i=0;
            let flag = false;
            let cartitems=localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[];
                for(i;i<cartitems.length;i++){
                    if(cartitems[i].id ===product.id)
                    {
                        cartitems[i].quantity+=1;
                        flag = true;
                        localStorage.setItem("cartitems",JSON.stringify(cartitems));

                    }
                }
                if (!flag){
                    product.quantity=1;
                    cartitems.push(product);
                    localStorage.setItem("cartitems",JSON.stringify(cartitems));
                }

              
                

            
        }

        return (
            <>
            <h2>Shop</h2>
        <div className='container-shop'>
            
            <div className='container-card'>

           { card.map((element,index) => { return(<div className='each-card'>
            
            <img src={element.urll} />
            
            <h5>{element.description}</h5><h4>{element.price}$</h4>
            <button onClick={()=>addtocart(element)}>add to cart</button>
           
           </div>)
                
            })}
                  
            </div>

        </div>
        </>
    )
}

export default Cards
