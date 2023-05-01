import React from "react";
import { useNavigate } from "react-router-dom";

function BlogList({ post }) {
    const navigate = useNavigate();

    return (
        <li onClick={() => navigate('/read/' + post.id)}>{post.title}</li>
    );
}

export default BlogList;