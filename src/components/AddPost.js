import React, { useState } from "react";

function AddPost() {
    const [postData, setPostData] = useState({
        author: "",
        title: "",
        body: ""
    });

    console.log(postData)
    
    function handleChange(e) {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Write</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={postData.title} onChange={handleChange} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" value={postData.author} onChange={handleChange} />
                <label htmlFor="body">Write</label>
                <input type="textarea" name="body" value={postData.body} onChange={handleChange} />
                <input type="submit" value="Post" />
            </form>
        </div>
    );
}

export default AddPost;