import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../features/posts/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import usePostContext from "../../usePostContext";

function ShowPost() {
  const { id } = useParams();

  const { store, dispatch } = usePostContext();

  const post = [...store.posts].find((post) => post._id === id) || null;

  const dispatchAuth = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const currentUserId = user._id;

  return post ? (
    <>
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
                dispatchAuth(updatePost(post._id));
                dispatch({ type: "updatePost", payload: post._id });
                nav(`/post/edit/${post._id}`);
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
