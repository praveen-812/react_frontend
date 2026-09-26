const Tasks1=()=>{
   
  const arr= ["jss","react","python","dotnet","fullStack"]

    return(
        <>
        <div>
        {
            arr.map((arr,index)=>( 
                <p key={index}>{arr}</p>
            ))
        }
        
        </div>
        
        </>)
}
export default Tasks1