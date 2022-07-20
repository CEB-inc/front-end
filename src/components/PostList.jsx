import { useContext, useEffect, useState } from "react";
import StoreContext from "../store";
import PostListItem from "./PostListItem";
import axios from "axios"

// TODO IMPLEMENT FILTER HERE. map accross list
// if category has been provided, it will first filter entries by the category
function PostList() {
  // importing from StoreContext, the parent route of this route
  // also destructuring store into posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function listPosts() {
      const resp = await axios(`http://localhost:4000/api/v1/posts`);
      setPosts(resp.data);
    }
    listPosts();
  }, []);

  return posts ? (
    <ul className="px-2">
      {posts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </ul>
  ) : (
    <p>Loading ...</p>
  );
}

export default PostList;
