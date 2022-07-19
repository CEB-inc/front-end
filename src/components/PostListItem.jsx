import React from 'react'
import { Link } from 'react-router-dom'

function PostList({ post }) {
  return (
    <li className='card' key={post._id}>
        <div className='p-2'>
            <h4>category: ({post.category})</h4>
            <p className='fw-semibold'>Title: <Link to={`/post/${post._id}`}>{post.title}</Link></p>
            <p>media: {post.media}</p>
            <p>body: {post.body}</p>
            <p>{post.score === 0 ? '' : post.score}</p>
        </div>
    </li>
  )
}

export default PostList