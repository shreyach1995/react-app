import React from 'react';
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'skyblue' : 'white'
        }
    };
 return (
    
    <div className='nav-margin'>
        <nav>
        <NavLink style={navLinkStyles} className="link-color" to="/">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink style={navLinkStyles} className="link-color" to="/my-todo-list">My Todo List</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink style={navLinkStyles} className="link-color" to="/about">About</NavLink>
        </nav>
        <br />
    </div>
    
  )
}
