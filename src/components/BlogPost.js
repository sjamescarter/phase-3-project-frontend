import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment"
import Error from "./Error"
import AddComment from "./AddComment";
import EditPost from "./EditPost";

function BlogPost({ onPostDelete, login }) {
    const [blogPost, setBlogPost] = useState()
    const [error, setError] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

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

    function onEditSubmit(endpoint, data) {
        fetch('http://localhost:9292' + endpoint + '/' + params.id, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(updatedPost => setBlogPost({
            ...blogPost,
            author: updatedPost.author,
            title: updatedPost.title,
            body: updatedPost.body
        }))
    }

    function onDelete(id) {
        fetch('http://localhost:9292/comments/' + id, {
            method: "DELETE",
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
        isEditing ? (
            <EditPost 
                onEditSubmit={onEditSubmit} 
                onPostDelete={onPostDelete}
                setIsEditing={setIsEditing} 
                post={{
                    id: blogPost.id,
                    author: blogPost.author, 
                    title: blogPost.title, 
                    body: blogPost.body
                }} 
            />
        ) : (
            <div>
                <h2>{blogPost.title}</h2>
                <small>{blogPost.author.toUpperCase()} | {blogPost.created_at.slice(0, 10)} </small>
                <p>{blogPost.body}</p>
                {login ? <button onClick={() => setIsEditing(!isEditing)}>edit</button> : null}
                {blogPost.comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} onDelete={onDelete} login={login} />
                })}
                <AddComment onSubmit={onSubmit} postId={blogPost.id} />
            </div>
        )
    );
}

export default BlogPost;