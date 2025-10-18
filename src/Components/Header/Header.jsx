
import './Header.css'
import { motion } from "motion/react"
const Header = () => {
    return <>
    <motion.div
      // {--- Animation ---}
     initial={{opacity:0 ,x:-100}}
     transition={{duration: 1}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}



        className="header">
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes of crafted with the the finest ingredients</p>
            <button> View Menu</button>
        </div>
    </motion.div>
    
    
    </>
}


export default Header;