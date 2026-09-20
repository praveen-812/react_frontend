import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Course from "./pages/Course.jsx"
import Gallery from "./pages/Gallery.jsx"
import Help from "./pages/Help.jsx"
import Service from "./pages/Service.jsx"

import Navbar from "./components/Navbar.jsx"

import Mainpage from "./components/Mainpage.jsx"
import { Routes, Route } from "react-router-dom"

const App =()=>{

  return(<>
  
     <div>
       <Navbar/>
       
      <Routes>
         <Route path="/"  element={<Home/>}/>
         <Route path="/About"  element={<About/>}/>
         <Route path="/Service"  element={<Service/>}/>
         <Route path="/Contact"  element={<Contact/>}/>
         <Route path="/Gallery"  element={<Gallery/>}/>
         <Route path="/Help"  element={<Help/>}/>
          <Route path="/Course"  element={<Course/>}/>
      </Routes>
      
     </div>
  </>)
}
export default App