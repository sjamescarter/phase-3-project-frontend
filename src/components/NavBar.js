import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/read">Read</NavLink>
            <NavLink to="/write">Write</NavLink>
        </div>
    );
}

export default NavBar;