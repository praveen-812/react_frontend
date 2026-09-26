const Arrobj =()=>{

 const Student=[
    {name:"praveen",
     age:"25",
     course:"fullstack"
    },
    {
        name:"santhosh",
        age:22,
        course:"react"
    },
    {
        name:"gopi",
        age:22,
        course:"java"
    }
]

    return(
     <>
     <div>
        <h2>asrray of object</h2>
        {Student.map(( Student,index)=>(
            <div key={index}>
                <p>{Student.name}</p>
                <p>{Student.age}</p>
                <p>{Student.course}</p>
            </div>

        ))
    }
     </div>
     
     </>
    )
}
export default Arrobj