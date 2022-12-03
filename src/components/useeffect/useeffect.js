import React,{ useEffect,useState } from "react"
/*useeffect runs after every render 
placed inside a component 
usefffect being every time can cause performance issues

*/
export const Useone =()=>{
    const[count,setCount]=useState(0)
    const [name ,setName]=useState('')
    useEffect(()=>{
        console.log(`useffect -updarting document  title`)
        document.title= ` you clicked ${count} times`
    },[count])

    return(
        <>
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count + 1)}>clicked {count}  times</button>

        </div>
        
        </>
    )
}
