import React from "react";

function Comment({ comment, onDelete }) {
    return (
        <div>
            <h4>{comment.name} says</h4>
            <p>{comment.comment}</p>
            <button onClick={() => onDelete(comment.id)}>🗑</button>
        </div>
    );
}

export default Comment;