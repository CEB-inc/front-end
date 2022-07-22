import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function PostList({ post }) {

  const { user } = useSelector((state) => state.auth);

  // 
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
      { user ? (
      <Link to={`/post/${post._id}`} className="text-black LinkItem">
        <div>
              <p className='fw-bold fs-4 d-flex justify-content-center text-white bg-dark'>{post.title}</p>
              <p className='mt-2 d-flex justify-content-center'>A {post.category} on {post.media}</p>
              <p className='mx-3 d-flex justify-content-center'>{shortBody(post.body)}</p>
              {post.category === "Blog" ? "" : <p className='fw-bold fs-4 d-flex justify-content-center'>{post.score == null ? '' : `${post.score}/10`}</p>}
          </div>
      </Link>) : (
      <Link to={"/login"} className="text-black LinkItem">
        <div>
              <p className='fw-bold fs-4 d-flex justify-content-center text-white bg-dark'>{post.title}</p>
              <p className='mt-2 d-flex justify-content-center'>A {post.category} on {post.media}</p>
              <p className='mx-3 d-flex justify-content-center'>{shortBody(post.body)}</p>
              {post.category === "Blog" ? "" : <p className='fw-bold fs-4 d-flex justify-content-center'>{post.score == null ? '' : `${post.score}/10`}</p>}
          </div>
      </Link>)}
    </li>
  )
}

export default PostList