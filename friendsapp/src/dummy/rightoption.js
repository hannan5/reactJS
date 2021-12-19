import { useState } from "react"
import Rightoptionapi from "../API/rightoptionAPI"

const Rightoption = () =>{
    
    const [option, setoption] = useState(Rightoptionapi)

    return(
        <>
        {option.map((element)=>{
            return(
                <div>
                <button className='dummybtn'> {element.option}</button>
            </div>
    
            )
        })}
        </>
    )
}
export default Rightoption