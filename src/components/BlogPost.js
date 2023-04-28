import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment"
import Error from "./Error"
import AddComment from "./AddComment";

function BlogPost() {
    const [blogPost, setBlogPost] = useState()
    const [error, setError] = useState(false)

    let params = useParams();

    useEffect(() => {
        fetch('http://localhost:9292/posts/' + params.id)
        .then(r => r.json())
        .then(data => setBlogPost(data))
        .catch(error => setError(error))
    }, []);

    function onSubmit(endpoint, data) {
        fetch('http://localhost:9292' + endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(newComment => setBlogPost({
            ...blogPost,
            comments: [...blogPost.comments, newComment]}))
      }

    function onDelete(id) {
        fetch('http://localhost:9292/comments/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(r => r.json())
        .then(data => setBlogPost({
            ...blogPost,
            comments: [...blogPost.comments.filter(comment => comment.id !== data.id)]
        }));
    }

    if(error !== false) {
        return <Error />;
    }

    if(!blogPost) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <small>{blogPost.author.toUpperCase()} | {blogPost.created_at.slice(0, 10)} </small>
            <p>{blogPost.body}</p>
            {blogPost.comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} onDelete={onDelete} />
            })}
            <AddComment onSubmit={onSubmit} postId={blogPost.id} />
        </div>
    );
}

export default BlogPost