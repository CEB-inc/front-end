import React from 'react'
import { Link } from 'react-router-dom'

function PostList({ post }) {

  // Function to restrict displayed text.
  function shortBody(body) {
    const bodyArray = body.split(' ')
    if (bodyArray.length > 50) {
      return body.slice(0, 200) + '.....'
    } else {
      return body
    }
  }

  return (
    <li className='card' key={post._id}>
        <div className='p-2'>
            <p className='fw-bold fs-4 d-flex justify-content-center'><Link to={`/post/${post._id}`}>{post.title}</Link></p>
            <p className=''>A {post.category} on {post.media}</p>
            <p>{shortBody(post.body)}</p>
            <p className='fw-bold fs-4 d-flex justify-content-center'>{post.score == null ? '' : `${post.score} /10`}</p>
        </div>
    </li>
  )
}

export default PostList