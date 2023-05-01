import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Login({ login, setLogin }) {
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        if(password === "123456") {
            setLogin(true);
            // navigate("/write")
        }
        else {
            window.alert("Login failed!");
            setPassword("");
        }
    }

    console.log(password)
    if(login === true) {
        return (
            <div>
                <h2>Welcome back, Captain!</h2>
            </div>
        );
    }
    else {
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
}

export default Login;