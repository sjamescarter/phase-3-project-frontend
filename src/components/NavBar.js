import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ login }) {
    return (
        <div>
            <NavLink to="/read">Read</NavLink>
            <NavLink to="/login">{login ? "Dashboard" : "Login"}</NavLink>
            {login ? <NavLink to="/write">Write Post</NavLink> : null}
        </div>
    );
}

export default NavBar;