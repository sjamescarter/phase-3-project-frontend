import React from "react";
import BlogPreview from "./BlogPreview";

function Blog({ posts }) {
    if(!posts) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {posts.map((post) => {
                return <BlogPreview key={post.id} post={post} />
            })}
        </div>
    );
}

export default Blog;