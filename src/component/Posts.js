import React from 'react';
import Post from './Post';

const Posts = (props) => {
    return (<div>
        {props.itents.map((article, index) => <Post key="index" articles={article} />)}
    </div>);
};

export default Posts;