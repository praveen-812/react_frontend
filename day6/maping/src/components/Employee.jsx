const Employee=(props)=>{

    return(<>
    
     <div>
        <h2>{props.employee.name}</h2>
        <p>Role: {props.employee.role}</p>
        <p>Salary: {props.employee.salary}</p>
        <p>City: {props.employee.city}</p>
     </div>
    
    </>)
}
export default Employee