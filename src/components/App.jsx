import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from './Nav'
import Home from './pages/Home'
import CategorySelection from './pages/CategorySelection'
import NewPost from './pages/NewPost'
import ShowPost from './pages/ShowPost'
import StoreContext from '../store'
import useStore from '../reducer'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  // dispatch is what we call(similar to setPosts), initialState is the initial state
  const [store, dispatch] = useStore()
  // destructuring posts out of store for useReducer. so no need to: store.posts
  const { posts } = store

  useEffect(() => {
      async function getPosts() {
      const res = await fetch('http://localhost:4000/api/v1/posts')
      dispatch({
        type: 'setPosts',
        data: await res.json()
      })
    }
    getPosts()
  }, [])


  // higher order component
  function ShowPostWrapper() {
    const { id } = useParams()
    return <ShowPost post={posts.find((post) => post._id == id)} />
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
    dispatch({
      type: 'addPost',
      data: returnedPost
    })
    return returnedPost._id
  }

  // StoreContext is in store.js, the .Provider is providing ALL children with a value
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<CategorySelection />} />
          <Route path='/post/:id' element={<ShowPostWrapper />} />
          <Route path='/post/new/:category' element={<NewPost addPost={addPost} />} />
          <Route path='*' element={<h4>Page not found</h4>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </StoreContext.Provider>
  )
}

export default App;
