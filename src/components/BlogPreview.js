import React from "react";

function BlogPreview({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <small>{post.author.toUpperCase()}</small>
            <br></br>
            <p>{post.body.length < 256 ? post.body : post.body.slice(0, 256) + '...'}</p>
        </div>
    )
}

export default BlogPreview;