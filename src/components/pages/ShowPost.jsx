// import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import StoreContext from "../../store";
import axios from 'axios'

function ShowPost() {
  // const { id } = useParams();
  // const {
  //   store: { posts },
  // } = useContext(StoreContext);
  // const post = posts.find((post) => post._id === id);
  // console.log("post", post);
  // // const nav = useNavigate()
  const dispatchAuth = useDispatch();
  const nav = useNavigate();


   const [post, setPost] = useState(null);
   const { id } = useParams();

   useEffect(() => {
     async function getPost() {
       const x = await axios(`http://localhost:4000/api/v1/posts/${id}`);
       setPost(x.data);
     }
     getPost();
   }, []);
  return post ? (
    <>
      <h5 className="title is-1">{post.media}</h5>
      <h5 className="title is-1">Title: {post.title}</h5>
      <h5 className="title is-1">{post.body}</h5>
      {post.score ? <h5 className="title is-1">score: {post.score}</h5> : ""}
      <p>Posted in {post.category}</p>
      <div>Time Posted: {new Date(post.createdAt).toLocaleString("en-AU")}</div>
      <button onClick={() => {
        dispatchAuth(deletePost(post._id));
        nav('/')
      }}>delete</button>
    </>
  ) : (
    <p>Loading ...</p>
  );
}

export default ShowPost;
