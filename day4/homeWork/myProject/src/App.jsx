
import Navbar from "./components/Navbar.jsx"

import Home from "./pages/Homes.jsx"
import Contact from "./pages/Contact.jsx"
import Helps from "./pages/Helps.jsx"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"

import { Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Helps" element={<Helps />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

      </div>
    </>
  )
}

export default App
