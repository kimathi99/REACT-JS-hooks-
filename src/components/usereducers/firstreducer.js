import React ,{useReducer}from 'react'

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

function FirstReducer (){
    const [count ,dispath]=useReducer(reducer,initialState)
    return (
            <div >
                <div>count  : {count}</div>
                <button onClick={()=>{dispath('increment')}}>Increment</button>
                <button onClick={()=>dispath('decrement')}>Decrement</button>
                <button onClick={()=>dispath('reset')}>Reset</button>

            </div>

     )
}

export default FirstReducer    
