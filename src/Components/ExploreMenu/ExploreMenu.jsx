import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';
import { motion } from "motion/react"



const ExploreMenu = ({category,setCategory}) => {
    return <>
    <motion.div
     // {--- Animation ---}
     initial={{opacity:0 ,x:200}}
     transition={{duration: 1.5}}
     whileInView={{opacity:1 , x:0}}
     viewport={{once:false}}
    
    
    className="explore-menu" id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item , index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </motion.div>
    
    
    </>
}



export default ExploreMenu;
