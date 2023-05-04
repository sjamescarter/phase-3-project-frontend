import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ login }) {
    const navLinks = [
        {text: "Home", link: "/"},
        {text: "Listen", link: "/listen"},
        {text: "Read", link: "/read"},
        {text: "Login", link: "/login"}
    ]

    const loginNavLinks = [
        ...navLinks.slice(0, 3),
        {text: "Write", link: "/write"},
        {text: "Dashboard", link: "/login"}
    ]

    const links = login ? loginNavLinks : navLinks

    return (
        <div>
            {links.map(link => <NavLink key={link.text} className={({ isActive }) => "nav" + (isActive ? "active" : "")} to={link.link}>{link.text}</NavLink> )}
            {/* <NavLink className={({ isActive }) => "nav" + (isActive ? "active" : "")} to="/">Listen</NavLink>
            <NavLink 
                className={({ isActive }) => "nav" + (isActive ? "active" : "")} 
                to="/read"
                >
                    Read
            </NavLink>
            {login ? <NavLink className={({ isActive }) => "nav" + (isActive ? "active" : "")} to="/write">Write</NavLink> : null}
            <NavLink className={({ isActive }) => "nav" + (isActive ? "active" : "")} to="/login">{login ? "Dashboard" : "Login"}</NavLink> */}
        </div>
    );
}

export default NavBar;