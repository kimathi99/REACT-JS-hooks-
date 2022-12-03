import React,{useReducer} from 'react'

const initialState={
    firstCounter : 0,
    secondCounter:9
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return  {...state, firstCounter : state.firstCounter + action.value }
        case 'decrement':
            return {...state, firstCounter : state.firstCounter - action.value }

        case 'increment2':
            return  {...state, secondCounter : state.secondCounter + action.value }
        case 'decrement2':
            return {...state, secondCounter : state.secondCounter - action.value }
            
        case 'reset':
            return initialState       
            
        default:
            return state
    }

}

function MyUseReducer() {
    const[count,dispath]=useReducer(reducer,initialState)
  return (
  <>  

        <div>MyUseReducer</div>
        <div> firstCounter{count.firstCounter}</div>
        <div> firstCounter{count.secondCounter}</div>
        <button onClick={()=>dispath({type :'increment', value: 1})}>increment</button>
        <button onClick={()=>dispath({type :'decrement', value: 1})}>increment</button>
        <br/>
        <div>
        <button onClick={()=>dispath({type :'increment2', value: 1})}>increment</button>
        <button onClick={()=>dispath({type :'decrement2', value: 1})}>increment</button>
        </div>
        <button onClick={()=>dispath({type :'reset'})}>Reset</button>
    </>

  )
}

export default MyUseReducer