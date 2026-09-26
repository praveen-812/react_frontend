import { Link } from "react-router-dom"


const Navbar = () => {
    return (

        <>
            <div className="flex justify-between items-center bg-gray-400">
                <div className="ml-15">

                   <h2 className="bg-black w-15 text-white p-2 m-2  text-center rounded-xl">logo</h2>
                </div>
                <div className="flex gap-15 mr-15">
              <Link to="/">Home</Link>
               <Link to="/Contact">Contact</Link>
                <Link to="/Helps">Helps</Link>
                 <Link to="/About">About</Link>
                 </div>
              
            </div>


        </>
    )
}
export default Navbar