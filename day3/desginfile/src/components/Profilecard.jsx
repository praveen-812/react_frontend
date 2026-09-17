import CardImage from "../assets/images/schl.jpg"
const Profilecard =()=>{

    return(<>
    
    <div style={{width:"300px", boxShadow:"1px 1px 1px 2px" ,padding:"15px" ,margin:"15px",borderRadius:"15px"

                                                                                                                                                                                                }}>
        <div>
        <h2 style={{background:"grey",textAlign:"center"}}>MY CARD</h2>
        </div>
        <div style={{textAlign:"center"}}>
            <img src={CardImage} alt="school" width="200px"/>

            <h4>Name: Praveen</h4>
            <h4>age: 25</h4>
            <h4>course: fullstack</h4>
            <button>click</button>
        </div>
    </div>
    </>)
}

export default Profilecard