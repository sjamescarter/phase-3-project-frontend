import React from "react";

function Dashboard({ setLogin, children }) {
    return (
        <div>
            <button>Write Post</button>
            <button onClick={() => setLogin(false)}>Log Out</button>
            {children}
        </div>
    );
}

export default Dashboard;