import React from "react";

function Comment({ comment }) {
    return (
        <div>
            <h4>{comment.name} says</h4>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;