const Student =()=>{
  const students={
      name:"praveen",
      age:25,
      course:"fullstack"
  }
    return(<>
    
    <div>
      <h2>student details</h2>
      <p>{students.name}</p>
      <p>{students.age}</p>
      <p>{students.course}</p>
    </div>
    </>)
}
export default Student