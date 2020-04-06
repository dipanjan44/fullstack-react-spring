import React from 'react'


export const Topic = ({title, content,author}) =>
    <div>
        <h3> {title}</h3>
        <div>
            {content}
        </div>
        <i> Written by <b> {author}</b></i>
    </div>
