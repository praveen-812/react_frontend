const Task2 = () => {
    const Student = {
        name: "praveen",
        age: 25,
        course: "java",
        city: "chennai"
    }

    return (
        <>

            <div >
                <h2 className="bg-red-400 text-center p-5 m-5 rounded-2xl">task 2 </h2>

                <div className="flex justify-center ">
                    <div className="bg-pink-500 p-5 w-50 rounded-2xl text-center ">

                        <p>name:{Student.name}</p>
                        <p>age:{Student.age}</p>
                        <p>course;{Student.course}</p>
                        <p>city:{Student.city}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Task2