import React,{useReducer} from 'react'
import componentA from './componenta'
import componentB from './componentb'
import componentC from './componentc'

export const CountContext=React.createContext()


const initialState=0
const reducer=(state , action )=>{
     //action is the  type of thing to happen
     //then you have to switch them
     switch (action) {
         case 'increment':
             return state + 1
         case 'decrement':
             return state - 1   
         case 'reset':
             return initialState 
     
         default:
             return state
     }    
}
 

function ContextThing() {
  const[count,dispatch]=useReducer(reducer,initialState)
  return (
  <CountContext.Provider value={{countState :count ,countDispatch : dispatch}}>
    <div>count : {count}</div> 
    <div> 
      <componentA/>
      <componentB/>
      <componentC/>
    </div>             
  </CountContext.Provider>
     )
}

export default ContextThing