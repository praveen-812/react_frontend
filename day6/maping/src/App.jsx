import Task2 from "./components/Task2"
import Task3 from "./components/Task3"
import Task4 from "./components/Task4.jsx"
import Employee from './components/employee.jsx'


const App =()=>{
  const Course=["jss","java","python","javascript","angular"]
  
  return(<>
  
   <div className="bg-blue-200 text-center">

    <p className="bg-green-200 rounded-2xl border">This is our Course task-1</p>
      {
        Course.map((course,index)=>(
          <p key={index}>{course}</p>
        ))
      }
 </div>

      <Task2/>
      <Task3/>
      <Task4/>
  
  
  
  </>)
}
export default App