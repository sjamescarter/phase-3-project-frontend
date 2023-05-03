import React from "react";

function Header({ children }) {
    return (
        <div className="header">
            <div className="wrapper">
                {/* <h1>Captain Jonny's Blog</h1> */}
                <div className="logo"></div>
                {children}
            </div>
        </div>
    );
}

export default Header;