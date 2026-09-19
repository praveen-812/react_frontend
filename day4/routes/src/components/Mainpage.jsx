import Products from "../assets/images/product5.jfif"
const Mainpage =()=>{

    return(
        <>
         <div className="p-15">
            <section><b className="text-8xl font-semibold">This is the main page of our company.. </b>
            </section>
         </div>

         <div className="flex justify-center shadow-xl shadow-red-500 ">
            <img src={Products} alt="products" className="w-280 rounded-2xl h-150" />
         </div>
        </>
    )
}
export default Mainpage