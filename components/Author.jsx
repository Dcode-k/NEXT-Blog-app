import React from 'react'

const Author = ({author}) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
           <img src={author.photo.url} alt={author.name} height="100px" width="100px" className="align-middle rounded-full" />
        </div>
    )
}

export default Author
