import React from "react";

function Header({ children }) {
    return (
        <div>
            <h1>Captain Jonny's Blog</h1>
            {children}
        </div>
    );
}

export default Header;