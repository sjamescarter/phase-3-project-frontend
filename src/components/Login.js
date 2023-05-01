import React, { useState } from "react";
import Dashboard from "./Dashboard";
import BlogList from "./BlogList";

function Login({ login, setLogin, posts }) {
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        if(password === "123456") {
            setLogin(true);
        }
        else {
            window.alert("Login failed!");
        }
        setPassword("");
    }

    if(login === true) {
        return (
            <div>
                <h2>Welcome back, Captain!</h2>
                <Dashboard setLogin={setLogin}>
                    <BlogList posts={posts} />
                </Dashboard>
            </div>
        );
    }

    return (
        <div>
            <h2>Enter your passcode:</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="submit" 
                    value="Login" 
                />
            </form>
        </div>
    );
}

export default Login;