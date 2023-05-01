import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/read">Read</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
}

export default NavBar;