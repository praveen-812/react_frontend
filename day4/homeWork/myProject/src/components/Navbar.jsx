
import {Link} from "react-router-dom" 


const Navbar =()=>{
   return(<>
   <div>
       <div >
        <h3>Logo</h3>
       </div>
       <div>
        <Link to="/">Home</Link>
        <Link to="./Contact">Contact</Link>
        <Link to="./Helps">Helps</Link>
        <Link to="./About">About</Link>
        <Link to="Login">Login</Link>
       </div>

   </div> 
    </>)
}

export default Navbar