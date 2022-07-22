import React, { useState } from 'react';
import PostList from '../PostList'
import { useSelector } from 'react-redux'
import "/src/index.css";

function Home() {
  const { user } = useSelector((state) => state.auth);

return (
    <>
      <h3 className="Header">Dive in!</h3>
      { user ? '' : (
      <h5 className="Header text-muted">Login or Sign Up to start blogging</h5> 
      )}
      <PostList />
    </>
  )
}

export default Home;