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
      <h4 className="d-flex justify-content-center"><strong>{post.title}</strong></h4>
      <h5 className="d-flex justify-content-center">A {post.category} in {post.media}</h5>
      <p className="m-4 d-flex justify-content-center PostBody">{post.body}</p>
      {post.score ? <h5 className="d-flex justify-content-center">score: {post.score}/10</h5> : ""}
      <div className="d-flex justify-content-center">Time Posted: {new Date(post.createdAt).toLocaleString("en-AU")}</div>
      <h5 className="d-flex justify-content-center">created by: {post.name}</h5>

      <div className="d-flex justify-content-center">
        {currentUserId === post.user && (
          <div className="d-flex">
            <button type="button" className="btn btn-danger m-1"
              onClick={() => {
                dispatchAuth(deletePost(post._id));
                dispatch({ type: "deletePost", payload: post._id });
                nav("/");
              }}
            >
              Delete
            </button>
            <button type="button" className="btn btn-warning m-1"
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
