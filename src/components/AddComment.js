import React, { useState } from "react";

function AddComment({ onSubmit, postId }) {
    let newComment = {
        name: "",
        comment: "",
        post_id: postId
    }

    const [formData, setFormData] = useState(newComment)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit('/comments', formData);
        setFormData(newComment);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <label htmlFor="comment">Comment: </label>
            <input type="textarea" name="comment" value={formData.comment} onChange={handleChange} />
            <input type="submit" value="Comment" />
        </form>
    )
}

export default AddComment;