import{useNavigate} from 'react-router-dom';
import React, { useState } from 'react';


export const Home= ()=>{
    const navigate=useNavigate()
    const initialCount=0
    const[counter,setCounter] = useState(initialCount)

    const incrementFive=()=>{
        for (let i = 0; i < 5; i++) {
            /* SET A FUNCTION ALWAYS  TO TAKE CARE OF THE PREVIOUS STATE */
            setCounter(prevCounter=> prevCounter + 1)
            
        }
    }
        
    return(
    <> 
        <div>Home page</div>
        <button onClick={()=>navigate('confirmed')} >Confrim Order</button>
        <div>
            Count: {counter}
        </div>
        <div>
        <button onClick={()=>setCounter(initialCount)}>Reset Counter</button>
        </div>
        <div>
        <button onClick={()=>setCounter(prevCounter=> prevCounter + 1)}>Increment</button>
        </div>
        <div>
        <button onClick={()=>setCounter(prevCounter=> prevCounter - 1)}>Decrement</button>
        </div>
        <div>
        <button onClick={incrementFive}>Increment FIVE</button>
        </div>
        
    </>
       

    );
};