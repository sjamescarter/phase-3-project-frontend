import React from "react";
import BlogList from "./BlogList";

function Dashboard({ setLogin, posts }) {
    return (
        <div>
            <button>Write Post</button>
            <button onClick={() => setLogin(false)}>Log Out</button>
            <ul>
                {posts.map(post => <BlogList key={post.id} post={post}/>)}
            </ul>
        </div>
    );
}

export default Dashboard;