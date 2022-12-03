import React from 'react'
import {useNavigate } from  'react-router-dom';

export const OrderConfirmed= ()=>{
    const navigate= useNavigate()
    return(
        <>
         <div>
            The order was confrimed!!
        </div>
        <button onClick={()=> navigate(-1)}>GO back </button>
        
        </>
       
    );
};



