
import { useState } from 'react';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Header from '../../Components/Header/Header';
import './Home.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
import Login from '../../Components/Login/Login';

const Home = () => {

    const [category , setCategory] = useState('All')

    return <>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    
    
    </>
}



export default Home;
