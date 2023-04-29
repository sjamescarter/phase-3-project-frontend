import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditPost({ setIsEditing, post, onEditSubmit, onPostDelete }) {
    const [postData, setPostData] = useState(post);
    let navigate = useNavigate();

    function handleChange(e) {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEditSubmit("/posts", postData);
        setIsEditing(false);
    }

    function handleDelete() {
        onPostDelete(post.id);
        navigate("/read");
    }

    return (
        <div>
            <h2>Edit <button onClick={(handleDelete)}>Delete Post</button></h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={postData.title} onChange={handleChange} />
                <label htmlFor="author">Author: </label>
                <input type="text" name="author" value={postData.author} onChange={handleChange} />
                <label htmlFor="body">Write: </label>
                <input type="textarea" name="body" value={postData.body} onChange={handleChange} />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}

export default EditPost;