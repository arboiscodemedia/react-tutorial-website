import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Main from "./components/Main";

const MenuRoutes =()=>{
    return( 
    <Routes>
       <Route element={<Main/>}> 
         <Route path="/react-tutorial-website/" element={<Home/>} />
         <Route path="/react-tutorial-website/about" element={<About/>}/>
         <Route path="/react-tutorial-website/contact" element={<Contact/>}/>  
       </Route>      
    </Routes>
    )

}

export default MenuRoutes;
