// import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { useParams } from 'react-router-dom'
import StoreContext from '../../store'


function ShowPost() {
  const { id } = useParams();
  const { store: { posts } } = useContext(StoreContext);
  const post = posts.filter(post => post._id === id);
  console.log("post", post);
  // const nav = useNavigate()
  // const dispatchAuth = useDispatch();
  // const id = createPost(user, category, media, title, body, score)

  // this is old code from merge. AWAITING LIVE TEST
  // async function deletePost() {
  //   await fetch(`http://localhost:4000/api/v1/posts/${post._id}`, {
  //     method: "DELETE",
  //   })
  //   // updating the useState/setPosts array from App.jsx
    // nav("/post")
  //  }
  
  return post ? (
    <>
      <h5 className="title is-1">Media cat: {post.media}</h5>
      <h5 className="title is-1">Title: {post.title}</h5>
      <h5 className="title is-1">Body: {post.body}</h5>
      { post.score ? <h5 className="title is-1">score: {post.score}</h5> : '' }
      <p>Posted in {post.category}</p>
      {/* <button onClick={dispatchAuth(deletePost(post._id))}>delete</button> */}
    </>
  ) : (
      <p>Loading ...</p>
  )
}

export default ShowPost;
