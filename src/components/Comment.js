import React from "react";

function Comment({ comment, onDelete, login }) {
    return (
        <div className="comment">
            <h4>
                {comment.name} • <small>{comment.created_at.slice(0, 10)}</small>
                {login ? <button onClick={() => onDelete(comment.id)}>🗑</button> : null}
            </h4>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;