import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

function ShowPost({ post }) {
  const dispatch = useDispatch();

  return post ? (
    <>
      <h5>{post.post}</h5>
      <p>Posted in {post.category}</p>
      <button onClick={() => dispatch(deletePost(post._id))}></button>
    </>
  ) : (
    <p>Loading ...</p>
  );
}

export default ShowPost;
