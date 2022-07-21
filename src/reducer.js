import { useReducer } from "react";

// state==store(or initial state), action==dispatch
function reducer(state, action) {
  switch (action.type) {
    case "setPosts":
      return {
        // spreads initial state for us to take values from
        ...state,
        // replace array with API arrays
        posts: action.data,
      };
    case "addPost":
      return {
        ...state,
        // this is setting what goes into posts array within initialState object. plus adding the extra.
        posts: [...state.posts, action.payload],
      };

    case "updatePost":
      const updatedPost = action.payload;
      // Creates a copy of the current state and checks for the updated post id in the current state to then 
      // replace it with its updated state
      const updatedPosts = [...state.posts].map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );

      return {
        ...state,
        posts: updatedPosts,
      };

    case "deletePost":
      const postId = action.payload;
      const postsAfterDelete = [...state.posts].filter(
        (post) => postId !== post._id
      );

      return {
        ...state,
        posts: postsAfterDelete,
      };
    default:
      return state;
  }
}

// initial state of each array
const initialState = {
  posts: [],
  categories: [],
};

// Custom Hook. Calls another hook and returns that return value
const useStore = () => useReducer(reducer, initialState);

export default useStore;
