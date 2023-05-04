import React from "react";
import BlogList from "./BlogList";
import { useNavigate } from "react-router-dom";

function Dashboard({ setLogin, posts }) {
    let navigate = useNavigate();

    return (
        <div>
            <h2>Welcome back, Captain!</h2>
            <button onClick={() => navigate('/write') }>Write Post</button>
            <button onClick={() => setLogin(false)}>Log Out</button>
            <div>
                {posts.map(post => <BlogList key={post.id} post={post}/>)}
            </div>
        </div>
    );
}

export default Dashboard;