import React from "react";
import { Link } from 'react-router-dom'

function Home({ entries }) {
  return (
    <section className='px-2'>
      {entries.map((entry, index) => 
      <div className='card'>
        <div className='p-2'>
          {/* 'Blog' inside brackets to become entry.type (blog or review) */}
          <h4>category: ({entry.category})</h4>
          <p>title: {entry.title}</p>
          <p>media: {entry.media}</p>
          <p>body: {entry.body}</p>
          <p>{entry.score === 0 ? '' : entry.score}</p>
          <p className='fw-semibold'>Title: <Link to={`/entry/${index}`}>{entry.title}</Link></p>
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