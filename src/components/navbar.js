import  React from 'react';
import { NavLink} from 'react-router-dom';
import { UserAuth } from './auth';


export const Navbar= ()=>{
    const auth=UserAuth()
    
    const NavLinkStyles =({isActive})=>{
        return{
            fontWeight: isActive? 'bold':'normal',
            textDecoration: isActive? 'none': 'underline',
        }
    }
   
    return(
        <nav>
            <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
            <NavLink  style={NavLinkStyles} to ='/about'>About</NavLink>
            <NavLink  style={NavLinkStyles} to ='/products'>Products</NavLink>
            <NavLink  style={NavLinkStyles} to ='/practise'>Counter OBJ</NavLink>
            <NavLink  style={NavLinkStyles} to ='/countertwo'>Counter TWO</NavLink>
            <NavLink  style={NavLinkStyles} to ='/useone'>Useeffect</NavLink>
            <NavLink  style={NavLinkStyles} to ='/hookmouse'>mouse</NavLink>
            <NavLink  style={NavLinkStyles} to ='/cleanup'>Mouse cleanup</NavLink>
            <NavLink  style={NavLinkStyles} to ='/show'>Interval</NavLink>
            <NavLink  style={NavLinkStyles} to ='/fetch'>Useeffect</NavLink>
            <NavLink  style={NavLinkStyles} to ='/first'>Reducers</NavLink>
            <NavLink  style={NavLinkStyles} to ='/second'>ReducersRedux</NavLink>            
            <NavLink  style={NavLinkStyles} to ='/third'>MyGrip</NavLink>
           
            <NavLink  style={NavLinkStyles} to ='/profile'>Profile</NavLink>
           



            {
                !auth.user && (
                    <NavLink  style={NavLinkStyles} to ='/login'>Login</NavLink>
                )
            }

        </nav>
    );
};