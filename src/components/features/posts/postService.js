import axios from "axios";
  const api =
    import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";

const API_URL = `${api}/posts`;

// Create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);

  return response.data;
};

// Get user posts
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Update post
const updatePost = async (updateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Gathers api url and post id
  const updateURL = `${API_URL}/${updateData._id}`;
  const response = await axios.put(updateURL, updateData, config);

  return response.data;
};

// Delete post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Gathers api url and post id
  const deleteURL = `${API_URL}/${postId}`;
  const response = await axios.delete(deleteURL, config);

  return response.data;
};

const postService = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};

export default postService;
