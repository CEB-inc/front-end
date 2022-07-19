import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPost, getPosts, reset } from "../features/posts/postSlice";
import "/src/index.css";

function NewPost({ addPost }) {
  const { category } = useParams();
  const [post, setPost] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      nav("/login");
    }
    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
  }, [user, nav, isError, message, dispatch]);

  function submit(e) {
    e.preventDefault();
    dispatch(createPost({ post }));
    setPost("");

    const id = addPost(category, post);
    nav(`/post/${id}`);
  }

  return (
    <>
      <div className="ms-3">
        <h3>New Post for {category} </h3>
        <p>
          Select a post type: <strong>Blog</strong> or <strong>Review</strong>
        </p>
      </div>
      <form className="container-sm float-start px-3" onSubmit={submit}>
        <div className="">
          <textarea
            className="form-control mb-3"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            rows="10"
          ></textarea>
        </div>
        <button id="postbutt" className="btn px-5 fw-semibold">
          Post
        </button>
      </form>
    </>
  );
}

export default NewPost;
