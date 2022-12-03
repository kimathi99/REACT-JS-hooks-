import React,{ useState } from "react"

export const  Hookme=()=>{
    /* use state doesn not  automatically merge the  two objects we have to do it manually key dif with setState 
    you have to copy the whole object first*/

    const [name ,setName] = useState({firstName : '', lastName :''})
    return (
        <>
        <div>
         <form>
            <input type='text' 
             value={name.firstName}  
             onChange={(e) =>setName({...name,firstName: e.target.value})} />
            <input type='text'
             value={name.lastName} 
             onChange={(e) =>setName({...name ,lastName: e.target.value})}/>
            <h2>Your first name is  {name.firstName}</h2>
            <h2>Your first lastname is  {name.lastName}</h2>
         </form>
         </div>
        </>
    )
}