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
        posts: [...state.posts, action.data],
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

export default useStore