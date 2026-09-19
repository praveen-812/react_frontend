import {Link} from "react-router-dom"

const Navbar =()=>{

    return(<>
     <div className="bg-blue-200 flex  justify-between items-center">

        <div className="bg-blue-200, width=200 ml-5">

            <h3 className="p-4 bg-black m-2 color text-white rounded-2xl">MY COMPANY</h3>
        </div>
     <div  className="no-underline, flex gap-5 mr-10">
        <Link to="/"  >Home</Link>
        <Link to="/Contact" >Contact</Link>
        <Link to="/Course" >Course</Link>
        <Link to="/Gallery" >Gallery</Link>
        <Link to="/Help">Help</Link>
        <Link to="/Service" >Service</Link>
        <Link to="/About" >About</Link>
     </div>
     </div>
    
    </>)
}

export default Navbar