import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import StoreContext from '../../store'

function ShowPost({ post }) {
  const { dispatch } = useContext(StoreContext)
  const nav = useNavigate()
  const dispatchAuth = useDispatch();

  // this is old code from merge. AWAITING LIVE TEST
  // async function deletePost() {
  //   await fetch(`http://localhost:4000/api/v1/posts/${post._id}`, {
  //     method: "DELETE",
  //   })
  //   // updating the useState/setPosts array from App.jsx
  //   const updated = await fetch("http://localhost:4000/api/v1/posts")
  //   dispatch({
  //     type: 'setPosts',
  //     data: await updated.json()
  //   })
  //   nav('/')
  // }
  
  return post ? (
    <>
      <h5 className="title is-1">media cat:{post.media}</h5>
      <h5 className="title is-1">title: {post.title}</h5>
      <h5 className="title is-1">body: {post.body}</h5>
      { post.score === !null ? <h5 className="title is-1">score: {post.score}</h5> : '' }
      <p>Posted in {post.category}</p>
      <button onClick={dispatchAuth(deletePost(post._id))}>delete</button>
    </>
  ) : (
      <p>Loading ...</p>
  )
}

export default ShowPost;
