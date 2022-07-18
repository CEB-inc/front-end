import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "/src/index.css";

function NewPost({ addPost }) {
  const { category } = useParams();
  const [post, setPost] = useState("");
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
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
