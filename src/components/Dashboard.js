import React from "react";

function Dashboard({ setLogin }) {
    return (
        <div>
            <button>Write Post</button>
            <button onClick={() => setLogin(false)}>Log Out</button>
        </div>
    );
}

export default Dashboard;