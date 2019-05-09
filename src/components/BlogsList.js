import React from 'react';

export default function BlogList({posts, handleClick}) {
    // const listItems = Object.values(posts).map(p => <li>{p.title}</li>);
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <li onClick={() => {
            handleClick(id);
        }}>{theBlogPost.title} - {id}</li>
    })
    return (
        <ol>
            {listItems}
        </ol>
    );
}