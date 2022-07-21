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
      {userData && <h4>{userData.name}</h4>}
      <h5 className="title is-1">{post.media}</h5>
      <h5 className="title is-1">Title: {post.title}</h5>
      <h5 className="title is-1">{post.body}</h5>
      {post.score ? <h5 className="title is-1">score: {post.score}</h5> : ""}
      <p>Posted in {post.category}</p>
      <div>Time Posted: {new Date(post.createdAt).toLocaleString("en-AU")}</div>
      <div>
        {currentUserId === post.user && (
          <div>
            <button
              onClick={() => {
                dispatchAuth(deletePost(post._id));
                dispatch({ type: "deletePost", payload: post._id });
                nav("/");
              }}
            >
              Delete
            </button>
            <button
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
