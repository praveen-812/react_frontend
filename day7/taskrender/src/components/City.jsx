const City =()=>{


    const Cities=["chennai","banglore","kerala","odissa","coimbatore"]
    return(<>
    
    
    <div>
        {
            Cities.map((Cities,index)=>(

                <p key={index}>{Cities}</p>
            ))
        }
        
        
        </div>
        
        </>)
}
export default City