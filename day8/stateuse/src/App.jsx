import  { useState} from  "react"
const App =()=> {
     const [clickAdd,setClickAdd]=useState(0)
     const  clickadd=()=>{

       setClickAdd(clickAdd+1)


     }


return(
  <>
  
   <div>
      <h2>{clickAdd}</h2>

    <button onClick={clickadd}>click</button>
    
    {/* <button onClick={click}>clickSub</button>
    
    <button onClick={clickReset}>clickReset</button> */}
   </div>
  </>
)
}
export default App