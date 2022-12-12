import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Main from "./components/Main";

const MenuRoutes =()=>{
    return( 
    <Routes>
       <Route element={<Main/>}> 
         <Route path='/' element={<Home/>} />
         <Route path='about' element={<About/>}/>
         <Route path='contact' element={<Contact/>}/>  
       </Route>      
    </Routes>
    )

}

export default MenuRoutes;