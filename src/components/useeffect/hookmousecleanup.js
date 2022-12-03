import React,{ useState } from "react"
import { HookMouse } from "./hookmouse"

/* in this code code we are mounting and unmounting things on the useeffect hook in react js
which means we are adding a retun to the useffect in the hookmouse .
the return should be a function that removes the event listener from the boc  */
export const HookMouseCleanUp=()=>{
    const[display,setDisplay]=useState(true)
    
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
            {display  && <HookMouse/>}
        
        </div>
    )
}