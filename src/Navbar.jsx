import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = ()=>{

   return (
        <> 
        <header>
            <div className='d-flex justify-content-between'>
                <div className='brand-logo'>
                    <h1>
                        <NavLink to="/" >Mobile Products</NavLink>
                    </h1>
                </div>
                <nav>
                <ul className="d-flex ">
                    <li><NavLink activeClassName='menu_active' to="/" >Home</NavLink></li>
                    <li><NavLink activeClassName='menu_active' to="/about" title="">About</NavLink></li>
                    <li><NavLink activeClassName='menu_active' to="/products" title="">Products</NavLink></li>
                    <li><NavLink activeClassName='menu_active' to="/contact" title="">Contact</NavLink></li>
                </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Navbar;