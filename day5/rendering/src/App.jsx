import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Helps from "./pages/Helps"
import About from "./pages/About "
import Navbar from "./components/Navbar"




const App =()=>{

    return(
        <>
         <div>
            <Navbar/>
       

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/Contact"  element={<Contact/>}/>
                <Route path="/Helps"  element={<Helps/>}/>
                <Route path="/About"  element={<About/>}/>

       
            </Routes>
         </div>
        
        
        </>
    )
}

export default App