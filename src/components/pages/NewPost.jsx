import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";
import usePostContext from "../../usePostContext";
import "/src/index.css";

function NewPost() {
  const { dispatch: postDispatch } = usePostContext();
  const { category } = useParams();
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState("");
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isError, message } = useSelector((state) => state.posts);
  // useNavigate lets us force the user to a path
  const nav = useNavigate();


  // Checks to see if a user is logged in
  // If no user, redirects to login
  useEffect(() => {
    if (isError) {
      console.error(message);
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

    const response = await dispatch(
      createPost({ user, category, media, title, body, score })
    );

    switch (response.type) {
      case "posts/create/fulfilled":
        const postId = response.payload._id;

        postDispatch({ type: "addPost", payload: response.payload });
        nav(`/post/${postId}`);
      default:
        setErrored(true);
    }
  }

  return (
    <>
      <h2 className="fw-bold fs-3 d-flex justify-content-center">New Post in {category}</h2>
      <form className="container" onSubmit={submit}>
        <div className="mb-3 d-flex justify-content-center">
          <div>
            <select className="form-select" value={media} onChange={(e) => setMedia(e.target.value)}>
              <option>Select Media</option>
              <option>Music</option>
              <option>Games</option>
              <option>Movies</option>
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
        <button id="butt1" className="btn m-auto">Create Post</button>
      </form>
    </>
  );
}

export default NewPost;
