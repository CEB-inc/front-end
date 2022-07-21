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
    <li key={post._id} className='card shadow-lg'>
      <Link to={`/post/${post._id}`} className="text-black LinkItem">
        <div>
              <p className='fw-bold fs-4 d-flex justify-content-center text-white bg-dark'>{post.title}</p>
              <p className='mt-2 d-flex justify-content-center'>A {post.category} on {post.media}</p>
              <p className='mx-3 d-flex justify-content-center'>{shortBody(post.body)}</p>
              <p className='fw-bold fs-4 d-flex justify-content-center'>{post.score == null ? '' : `${post.score} /10`}</p>
          </div>
      </Link>
    </li>
  )
}

export default PostList