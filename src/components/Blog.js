import React, { useEffect, useState } from "react";
import BlogPreview from "./BlogPreview";

function Blog() {
    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetch('http://localhost:9292/posts')
        .then(r => r.json())
        .then(data => setPosts(data))
    }, []);

    console.log(posts)
    if (!posts) {
        return (
            <p>Loading Blog...</p>
        )
    }

    return (
        <div>
            {posts.map((post) => {
                return <BlogPreview key={post.id} post={post} />
            })}
        </div>
    );
}

export default Blog