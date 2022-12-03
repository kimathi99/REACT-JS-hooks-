import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "./auth"

export const Profile=()=>{
    const auth=UserAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
        auth.logout()
        navigate('/')
    }
    return(
        <>
        <div>Welcome {auth.user}</div>
        <button onClick={handleLogout}>Logout</button>
        </>
        
    )
}