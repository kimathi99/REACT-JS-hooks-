import React,{ useEffect, useState } from "react"
/* to run the useeffect once we have to use the   window. or a function inside 
this souunds crazy but thats the way to go 
then you have to have a return that returns a function  that will mount and amount while rendering
Remember the effect is called for every render unless you specify the depedency array
and to call the useffect on initial render then you have to pass an empty  array[]*/
export const HookMouse=()=>{
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logMousePosition=(e)=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
        /* compnent will unamount property which directly  retuns a function */
        return() =>{
            console.log('component unmounting code ')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return(
        <div>
            Hooks  X - {x}  Y -{y}

        </div>
    )
}