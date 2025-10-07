import { assets } from '../../assets/assets';
import './Footer.css'

const Footer = () => {
    return <>
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquid officiis dolor, magnam a id.loorem Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Praivacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-254-6254</li>
                    <li>contant@tomato.com</li>
                </ul>

            </div>

        </div>
        <hr />
        <p className='footer-copyright'>copyright 2025 & Tomato.com - All Right Reserved</p>
    </div>
    
    
    </>
}



export default Footer;
