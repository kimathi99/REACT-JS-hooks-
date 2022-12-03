import React,{ useState } from "react"
/*in classes the state is an object 
 in usestate it  doesnt have to be an object  array number string obj
 incase the usestate value depends on the previous value  you pass a function for the previous state
 when dealing  with objects and array call the spread operator to give you the desired outcome
*/
 export const CounterFour =()=>{
    const[items,setItems]=useState([])
    const addItem=()=>{
      setItems([...items ,{
         id:items.length,
         Value:Math.floor(Math.random()* 10) +1 
      }])        
    }

    return(
        <div>
        <button onClick={addItem}> Add a number</button>
             <ul>
               {
                  items.map((item )=>(
                     <li key={item.id}>{item.Value} </li>
                  ))
               }

             </ul>
        </div>
    )
 }