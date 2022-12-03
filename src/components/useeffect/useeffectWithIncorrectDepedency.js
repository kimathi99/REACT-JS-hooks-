import  React, { useEffect, useState } from "react";
/** The problem here is our mental model
 * depedency array is a way to let react know about everything the effect must watch for changes.
 * by passing an empty array basically to ignore for the count variable in the newer versions the react will not render
 * 
 */


function WithoutIncorrectDepedency() {
        const[count,setCount]=useState(0)
        /* make it an ideal solution to use the prevCount  function
        calling the tick function in a  useeffect needs  to jkeep track of the previous account 
        when we do so we done speciify  the empty depedency array 
         */

        const tick =()=>{
                setCount(prevCount =>prevCount + 1)
        }
        
        useEffect(()=>{
                /** calling a function within useeffect   creates a vlue and that value should be a depedency 
                 * and you must specify it in the down level.
                 */
                
                const interval=setInterval(tick ,1000)
                return ()=>{
                        clearInterval(interval)
                }

        },[])        

        return(
                <div>
                        {count}
                </div>
        )
}

export  default WithoutIncorrectDepedency

