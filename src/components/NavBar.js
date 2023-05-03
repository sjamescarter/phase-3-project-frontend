import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ login }) {
    return (
        <div>
            <NavLink className={({ isActive }) => "nav" + (isActive ? "active" : "")} to="/">Listen</NavLink>
            <NavLink 
                className={({ isActive }) => "nav" + (isActive ? "active" : "")} 
                to="/read"
                >
                    Read
            </NavLink>
            {login ? <NavLink className={({ isActive }) => "nav" + (isActive ? "active" : "")} to="/write">Write Post</NavLink> : null}
            <NavLink className={({ isActive }) => "nav" + (isActive ? "active" : "")} to="/login">{login ? "Dashboard" : "Login"}</NavLink>
        </div>
    );
}

export default NavBar;