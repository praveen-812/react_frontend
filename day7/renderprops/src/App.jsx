const App =()=>{
     const Student=[

        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"},
        {StuName:"praveen",StuAge:"26",StuCourse:"react",StuEmail:"praveen@gmail.com"}
     ]

    return(
    <>
    <div className="bg-pink-500 p-5 flex justify-center gap-5 flex-wrap ">
        {
            Student.map((e,i)=> (
                <div  key={i} className="bg- w-100  p-10  rounded-2xl">
                    <h2>{e.StuName}</h2>
                    <p>{e.StuAge}</p>
                    <p>{e.StuCourse}</p>
                    <p>{e.StuEmail}</p>
                    <button className="bg-black w-50 text-white rounded-2xl  p-2 m-2">Click</button>
                </div>
            ))
        }
    </div>
    </>)
}
export default App