import React from "react";

const Post = (props) => {
    return (<div> 
        <h1>{props.articles.fields.playerName}</h1>
        <h3>{props.articles.fields.description}</h3>
        <img src={props.articles.fields.image.fields.file.url} />
    </div>);
};

export default Post;

