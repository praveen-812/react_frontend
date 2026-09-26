const Task3 = () => {

    const arrobj = [
        {
            id: "skr123",
            name: "guva",
            price: 1500,
            category: "fruit"
        },
        {
            id: "skr124",
            name: "carrot",
            price: 500,
            category: "vegtables"
        },

        {
            id: "skr125",
            name: "keerai",
            price: 700,
            category: "keerai"
        },

        {
            id: "skr126",
            name: "phone",
            price: 4500,
            category: "gadgets"
        }
    ]

    return (
        <>

            <div>
                <h2 className="bg-green-500  text-center  p-2 m-4">task 3 </h2>

                {
                    arrobj.map((product) => (
                        <div className="flex justify-center ">
                            <div key={product.id} className="shadow-red-500 shadow-md rounded-2xl m-2 bg-gray-200  text-center font-bold text-2xl  w-200 ">
                                <h2>name:  {product.name} </h2>
                                <p>price: {product.price} </p>
                                <p>category: {product.category}</p>

                            </div>
                        </div>

                    ))
                }

            </div>

        </>

    )
}
export default Task3