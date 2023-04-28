import React from "react";
import { useNavigate } from "react-router-dom";

function BlogPreview({ post }) {
    let navigate = useNavigate();

    return (
        <div>
            <h1>{post.title}</h1>
            <small>{post.author.toUpperCase()}</small>
            <br></br>
            <p>
                {post.body.length < 256 ? post.body : post.body.slice(0, 256) + '... '}
                <button onClick={() => navigate("/read/" + post.id)} >see more</button>
            </p>
        </div>
    )
}

export default BlogPreview;