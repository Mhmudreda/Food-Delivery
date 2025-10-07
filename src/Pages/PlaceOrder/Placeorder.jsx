import { useContext } from 'react';
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext';

const Placeorder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)


    return <>
    <form className='place-oreder'>

        <div className="place-order-left">
            <p className='title'>Delivery Information</p>    
            <div className="multi-felids">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='last Name' />
            </div>
                <input type="email" placeholder='Email Address' />
                <input type="text" placeholder='Street' />
            <div className="multi-felids">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
              <div className="multi-felids">
                <input type="text" placeholder='Zip code' />
                <input type="text" placeholder='country' />
            </div>
            <input type="text" placeholder='Phone' />
        </div>

        <div className="place-order-right">
                 <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
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
                <button >PROCEED TO PAYMENT</button>
            </div>
            
        </div>
        
    </form>
    
    
    </>
}



export default Placeorder;
