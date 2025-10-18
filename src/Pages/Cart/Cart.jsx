
import { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"

const Cart = () => {


    const {cartItems , food_list , removeFromCart , getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate()
    return <>
    <div className="cart">
        <motion.div
        // {--- Animation ---}
     initial={{opacity:0 ,y:-50}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , y:0}}
     viewport={{once:false}}
        
        
        className="cart-item">
            <div className="cart-item-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                    return(
                        <div>
                            <div className="cart-items-title cart-items-item">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                        </div>
                        <hr />

                        </div>
                        
                    )
                }
            })}
        </motion.div>

        <div className="cart-bottom">
            <motion.div
            // {--- Animation ---}
     initial={{opacity:0 ,x:-100}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
            
            className="cart-total">
                <h2>Cart Total</h2>
                <div >
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery fee</p>
                        <p>${getTotalCartAmount()===0?0:+2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                    </div>
                    <hr />
                </div>
                <button onClick={()=>navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
            </motion.div>
            <motion.div
            // {--- Animation ---}
     initial={{opacity:0 ,x:100}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
            
            
            className="cart-promocode">
                <div>
                    <p>If you have a promocode, Enter it here</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder='promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
    
    
    </>
}



export default Cart;
