import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext';
import { motion } from "motion/react"


const FoodItem = ({id,name , price , description , image}) => {


    const {cartItems , addToCart , removeFromCart} = useContext(StoreContext)

    return <>

    <motion.div
     // {--- Animation ---}
     initial={{opacity:0 ,x:-100}}
     transition={{duration: 1}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
    
    
    
    className="food-item">
        <div className="food-item-img-container">
            <img src={image} className='food-item-image' alt="" />
            {
                !cartItems[id]
                ? <div onClick={()=>addToCart(id)} className='plus'>
                   <p>+</p>
                 </div>
                :<div className='food-item-counter'>
                   <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                   <p>{cartItems[id]}</p>
                   <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
            
            
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
       
    </motion.div>

    
    
    </>
}



export default FoodItem;
