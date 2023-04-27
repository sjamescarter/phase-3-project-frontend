import React from "react";

function Error({ error }) {
    return (
        <div>
            <h1>That's no good!</h1>
            <p>{error}</p>
        </div>
    )
}

export default Error;