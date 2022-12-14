import React ,{useContext} from 'react'
import { CountContext } from './contextcomponent'


function componentA() {
  const countContext= useContext(CountContext)
  return (
    <div>
        component A
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default componentA