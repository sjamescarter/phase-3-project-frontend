import React from "react";
import { useNavigate } from "react-router-dom";

function BlogPreview({ post }) {
    let navigate = useNavigate();

    return (
        <li onClick={() => navigate("/read/" + post.id)}>
            <h2>{post.title}</h2>
            <small>{post.author.toUpperCase()}</small>
            <br></br>
            <p>
                {post.body.length < 256 ? post.body : post.body.slice(0, 256) + '...'}
            </p>
        </li>
    )
}

export default BlogPreview;