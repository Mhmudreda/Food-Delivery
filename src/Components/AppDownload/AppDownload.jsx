
import  image  from './assets/Frame 12';
import './AppDownload.css'
import { motion } from "motion/react"

const AppDownload = () => {
    return <>
    <motion.div
    // {--- Animation ---}
     initial={{opacity:0 ,x:200}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
    
    
    className="app-download" id='app-download'>
        <p>For Better Experience Download <br />Tomato App</p>
        <motion.div
        // {--- Animation ---}
     initial={{opacity:0 ,y:-100}}
     transition={{duration: 1}}
     whileInView={{opacity:1 , y:0}}
     viewport={{once:false}}
        
        
        className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </motion.div>

    </motion.div>
    
    
    </>
}



export default AppDownload;
