import Employee from "./employee"

const Task4=()=>{
      

      const employee ={
         name:"praveen",
         role:"web developer",
          salary:3000,
         city:"chennai"


      }

    return(<>
      <div>
          
     <Employee employee={employee}/>

    
          
      </div>
    
     
    </>)
}
export default Task4
