import React from 'react';
import{Link,Outlet} from 'react-router-dom';
export const Products= ()=>{
    return(
        <>
            <div>
                <input type = 'search' placeholder='search products '/>
            </div>
            <nav className='primary-nav' >
                <Link  to='featured-products'>Featured</Link>
                <Link to='new-products'>New </Link>
            </nav>
            <Outlet/>
        </>
        
    );
};