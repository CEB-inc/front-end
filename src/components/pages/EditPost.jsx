import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../features/posts/postSlice";
import usePostContext from "../../usePostContext";
import "/src/index.css";

function EditPost() {
  const { store, dispatch: postDispatch } = usePostContext();

  const { id } = useParams();
  const post = [...store.posts].find((post) => post._id === id) || null;

  const [category, setCategory] = useState(post.category || "");
  const [media, setMedia] = useState(post.media || "");
  const [title, setTitle] = useState(post.title || "");
  const [body, setBody] = useState(post.body || "");
  const [score, setScore] = useState(post.score || "");
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isError, message } = useSelector((state) => state.posts);
  // useNavigate lets us force the user to a path
  const nav = useNavigate();

  // Checks to see if a user is logged in
  // If no user, redirects to login
  useEffect(() => {
    if (isError) {
    }

    if (!user) {
      nav("/login");
    }
  }, [user, nav, isError, message, dispatch]);

  // a for loop for score selection 1-10
  const scoreOptions = [<option key={0}>Rating:</option>]
  for (let i = 1; i <= 10; i++) {
    scoreOptions.push(<option key={i}>{i}</option>)
  }

  // What happens on submit. the press of the button.
  async function submit(e) {
    e.preventDefault();

    const updateParams = {
      ...post,
      category,
      media,
      title,
      body,
      score,
    };

    const response = await dispatch(updatePost(updateParams));

    const postId = response.payload._id;

    postDispatch({ type: "updatePost", payload: updateParams });

    nav(`/post/${postId}`);
  }

  return (
    <>
      <h2 className="fw-bold fs-3 d-flex justify-content-center">Edit {category}</h2>
      <form className="container" onSubmit={submit}>
        <div className="mb-3 d-flex justify-content-center">
          <div className='me-1'>
            <select className="form-select" value={media} onChange={(e) => setMedia(e.target.value)}>
              <option>Music</option>
              <option>Games</option>
              <option>Movies</option>
            </select>
          </div>
          <div>
            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>Blog</option>
              <option>Review</option>
            </select>
          </div>
        </div>
        <div className='mb-3 d-flex justify-content-center'>
          <div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='input'
              className="form-control"
              placeholder="Title: "
            ></input>
          </div>
        </div>
        <div className='mb-3'>
          <div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="form-control"
              placeholder="What are you about to babble about!?"
            ></textarea>
          </div>
        </div>
        {category === "Review" ? (
          <div className="mb-3 d-flex justify-content-center">
            <div>
              <select
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="mb-3 form-select"
              >
                {scoreOptions}
              </select>
            </div>
          </div>
        ) : (
            ""
        )}
        <button className="btn m-auto">Update Post</button>
      </form>
    </>
  )
}

export default EditPost;
