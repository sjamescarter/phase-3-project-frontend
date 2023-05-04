import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ login }) {
    const navLinks = [
        {text: "Home", link: "/"},
        {text: "Listen", link: "/listen"},
        {text: "Read", link: "/read"},
        {text: "Login", link: "/dashboard"}
    ]

    const loginNavLinks = [
        ...navLinks.slice(0, 3),
        {text: "Write", link: "/write"},
        {text: "Dashboard", link: "/dashboard"}
    ]

    const links = login ? loginNavLinks : navLinks

    return (
        <div>
            {links.map(link => <NavLink 
                key={link.text} 
                className={({ isActive }) => "nav" + (isActive ? "active" : "")} 
                to={link.link}
            >
                {link.text}
            </NavLink> )}
        </div>
    );
}

export default NavBar;