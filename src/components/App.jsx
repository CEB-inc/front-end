import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import CategorySelection from './pages/CategorySelection'
import NewPost from './pages/NewPost'
import ShowPost from './pages/ShowPost'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      async function getPosts() {
      const res = await fetch('http://localhost:4000/api/v1/posts')
      setPosts(await res.json())
    }
    getPosts()
  }, [])


  // higher order component
  function ShowPostWrapper() {
    const { id } = useParams()
    return <ShowPost post={posts.find((post) => post._id == id)} setPosts={ setPosts } />
  }

  async function addPost(category, media, title, body, score) {
    const newPost = { category, media, title, body, score }
    // second param of fetch is configuration. this is a fetch to post our new post to our API
    const res = await fetch("http://localhost:4000/api/v1/posts", {
      method: 'post',
      headers: {
        // telling the server we expect to get json back
        'Accept': 'application/json',
        // outgoing header. what we're sending is going to be json
        'Content-Type': 'application/json'
      },
      // providing the object that is being uploaded. we need to stringify it.
      body: JSON.stringify(newPost)
    })
    const returnedPost = await res.json()
    setPosts([...posts, returnedPost])
    return returnedPost._id
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path='/post/:id' element={<ShowPostWrapper />} />
        <Route path='/post/new/:category' element={<NewPost addPost={addPost} />} />
        <Route path='*' element={<h4>Page not found</h4>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
