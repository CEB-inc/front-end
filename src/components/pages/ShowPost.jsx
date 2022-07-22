import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deletePost } from "../features/posts/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import usePostContext from "../../usePostContext";

function ShowPost() {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);

  const { store, dispatch } = usePostContext();

  const post = [...store.posts].find((post) => post._id === id) || null;

  useEffect(() => {
    async function getUser(userId) {
      const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`);
      const postUser = await res.json();
      if (postUser) {
        setUserData(postUser);
      }
    }
    if (post) {
      getUser(post.user);
    }
  }, [post]);

  const dispatchAuth = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const currentUserId = user._id;

  return post ? (
    <>
      <h4 className="d-flex justify-content-center"><strong>{post.title}</strong></h4>
      <h5 className="d-flex justify-content-center">A {post.category} in {post.media}</h5>
      <p className="m-4 d-flex justify-content-center PostBody">{post.body}</p>
      {post.category === "Blog" ?  "" : <h4 className="d-flex justify-content-center">score: {post.score}/10</h4>}
      {userData && <h4 className="d-flex justify-content-center">Author: {userData.name}</h4>}
      <div className="d-flex justify-content-center">Time Posted: {new Date(post.createdAt).toLocaleString("en-AU")}</div>
      
      <div className="d-flex justify-content-center">
        {currentUserId === post.user && (
          <div className="d-flex">
            <button id='butt' type="button" className="btn btn-danger m-1"
              onClick={() => {
                dispatchAuth(deletePost(post._id));
                dispatch({ type: "deletePost", payload: post._id });
                nav("/");
              }}
            >
              Delete
            </button>
            <button id='butt' type="button" className="btn btn-warning m-1"
              onClick={() => {
                nav(`/post/${post._id}/edit`);
              }}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  ) : (
    <p>Loading ...</p>
  );
}

export default ShowPost;
