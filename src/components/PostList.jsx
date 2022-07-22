import PostListItem from "./PostListItem";
import usePostContext from "../usePostContext";

// TODO IMPLEMENT FILTER HERE. map accross list
// if category has been provided, it will first filter entries by the category
function PostList() {

  const {
    store: { posts },
  } = usePostContext();

  return posts ? (
    <ul className="ListContainer">
      {posts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </ul>
  ) : (
    <p>Loading ...</p>
      );
}

export default PostList;
