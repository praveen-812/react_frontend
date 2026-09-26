const Courses =()=>{
 const course=["frontend development","python courses","dotnet courses","data analists"]
    return(<>
    
     <div>
        {
         course.map((course,index) => (
            <p key={index}>{course}</p>
         ))
        }
     </div>
    </>)
}
export default Courses