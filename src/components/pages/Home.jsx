import React from "react";
import { Link } from 'react-router-dom'

function Home({ posts }) {
  return (
    <section className='px-2'>
      {posts.map((post, index) => 
      <div className='card'>
        <div className='p-2'>
          {/* 'Blog' inside brackets to become post.type (blog or review) */}
          <h4>category: ({post.category})</h4>
          <p>title: {post.title}</p>
          <p>media: {post.media}</p>
          <p>body: {post.body}</p>
          <p>{post.score === 0 ? '' : post.score}</p>
          <p className='fw-semibold'>Title: <Link to={`/post/${index}`}>{post.title}</Link></p>
        </div>
      </div>)}
    </section>
  )
}

export default Home

/* <Greeting firstName='UserName'/>

<section className="comments">
  <h1 class=''>Blogs</h1>
  <Card>
    <Comment userName='Ethan' date='10/11/21'>
      <p>comment content</p>
    </Comment>
  </Card>
  <Card>
    <Comment userName='Corey' date='11/12/22'>
      <p>comment content</p>
    </Comment>
  </Card>
  <Card>
    <Comment userName='Brian' date='12/03/23'>
      <p>comment content</p>
    </Comment>
  </Card>
</section> */