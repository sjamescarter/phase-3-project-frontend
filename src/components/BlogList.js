import React from "react";

function BlogList({ posts }) {
    console.log(posts)
    return (
        <div>
            {posts.map(post => <h3>{post.title}</h3>)}
        </div>
    );
}

export default BlogList;