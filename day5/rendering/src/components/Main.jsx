const Main =()=>{
 const name="praveen is head of our state"
 const age=2026
 const value=false
 let result=null
 let defineds=undefined


  const orginal = value?"its running":"its not running"
    return(
        <>
         <div className="bg-blue-300 p-20 m-15">
            <div>
               <p>Lorem ipsum dolor,<span className="text-red-600">{name}</span>,{age} sit amet consectetur adipisicing elit. Quasi vitae maxime reiciendis consectetur{name} distinctio, adipisci eveniet ipsam quod 
                nihil. Nam, quasi dolore magnam inventore totam deserunt aliquid nemo ad nihil.</p>
            </div>

            {/* <h2>{orginal}</h2> */}

            {value?"its running":"its not running"}


            {
                result??<h1>this is running to our system</h1>
            }

            {
                defineds??<h1>this is running defiends</h1>
            }

            {
                defineds &&<h1>this is running &&</h1>
            }

            {
                !value? "true":"false"
            }
         </div>
        </>
    )
}
export default Main