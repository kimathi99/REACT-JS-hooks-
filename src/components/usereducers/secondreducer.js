import React ,{useReducer}from 'react'
//by keeping state  as an object we are keeping track on two counters
//we can maintain both the  state and action as an object
const initialState={
    firstCounter : 0,
    //remember if we are working with two properties we have to  use the spread operator 
    //that is ...state, the the other  when doing operations 
    secondCounter : 10
}
const reducer=(state , action )=>{
    //action is the  type of thing to happen
    //then you have to switch them
    //action aas an object we are able to pass different data to that object.
    switch (action.type) {
        case 'increment':
            return {...state,firstCounter :state.firstCounter + action.value}
        case 'decrement':
            return {...state,firstCounter : state.firstCounter - action.value}   
        case 'increment2':
            return {...state,secondCounter :state.secondCounter + action.value}
        case 'decrement2':
            return {...state,secondCounter : state.secondCounter - action.value}
        case 'reset':
            return initialState 
    
        default:

            return state
    }    
 }

function SecondReducer (){
    const [count ,dispath]=useReducer(reducer,initialState)
    return (
            <div >
                <div>First Counter  : {count.firstCounter}</div>
                <div>Second Counter  : {count.secondCounter}</div>
                <button onClick={()=>{dispath({type: 'increment',value :1})}}>Increment</button>
                <button onClick={()=>dispath({type :'decrement',value :1})}>Decrement</button>
                <button onClick={()=>{dispath({type: 'increment',value :5})}}>Increment 5</button>
                <button onClick={()=>dispath({type :'decrement',value :5})}>Decrement 5</button>
                <div>
                <button onClick={()=>{dispath({type: 'increment2',value :1})}}>Increment2</button>
                <button onClick={()=>dispath({type :'decrement2',value :1})}>Decrement2 </button>
                </div>
                <button onClick={()=>dispath({type :'reset',value :1})}>Reset</button>

            </div>

     )
}

export default SecondReducer  
