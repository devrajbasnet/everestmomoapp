import { useState } from "react"
const Form=()=>{
    const [text,setText]=useState()
    return(
        <div>
           <form action="">
            <input type="text" value="Hello" onClick={(e)=>setText(e.target.value)}/>
            </form>
        </div>

    )
}

export default Form