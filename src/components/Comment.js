import React from "react";

function Comment({ comment, onDelete, login }) {
    return (
        <div>
            <h4>{comment.name} says</h4>
            <p>{comment.comment}</p>
            {login ? <button onClick={() => onDelete(comment.id)}>🗑</button> : null}
        </div>
    );
}

export default Comment;