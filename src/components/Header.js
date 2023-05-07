import React from "react";

function Header({ children }) {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="logo"></div>
                {children}
            </div>
        </div>
    );
}

export default Header;