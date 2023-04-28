import React from "react";

function Error({ error }) {
    return (
        <div>
            <h1>Hmm...something's not right here</h1>
            <p>{error}</p>
        </div>
    )
}

export default Error;