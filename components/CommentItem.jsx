import React from "react";

function CommentItem({data}) {
    return <div>
        <h5>{data.name}</h5>
        <p>{data.content}</p>
    </div>;
}

export default CommentItem
