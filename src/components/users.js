import React from 'react';
import {useSearchParams,Outlet} from 'react-router-dom';
export const Users=()=>{
    const[searchParams ,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter') ==='active'
    return(
        <>
         <div>
            <h2>user 1</h2>
            <h2>user 2</h2>
            <h2>user 3</h2>
            <Outlet/>
        </div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset params</button>
        {
            showActiveUsers? <h2>Showing active Users</h2> : <h2>all users</h2>
        }
        </>
    )
}