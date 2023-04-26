import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment"

function BlogPost() {
    const [blogPost, setBlogPost] = useState()
    let params = useParams();

    useEffect(() => {
        fetch('http://localhost:9292/posts/' + params.id)
        .then(r => r.json())
        .then(data => setBlogPost(data))
    }, []);

    if(!blogPost) {
        return (
            <p>Loading...</p>
        )
    }

    console.log(blogPost.comments)

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <small>{blogPost.author}</small>
            <p>{blogPost.body}</p>
            {blogPost.comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />
            })}
        </div>
    );
}

export default BlogPost