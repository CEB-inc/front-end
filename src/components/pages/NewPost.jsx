import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";
import usePostContext from "../../usePostContext";
import FlashMessage from "react-flash-message";
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
  const { isError, message } = useSelector(
    (state) => state.posts
  );
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

  // What happens on submit. the press of the button.
  async function submit(e) {
    e.preventDefault();

    const { payload } = await dispatch(
      createPost({ user, category, media, title, body, score })
    );

    const postId = payload._id;
    postDispatch({ type: "addPost", payload });
    nav(`/post/${postId}`);
  }

  return (
    <>
      <h2 className="title is-2 my-4">New Post in {category}</h2>
      <form className="container" onSubmit={submit}>
        <FlashMessage duration={5000}>
          <div className="alert alert-danger" role="alert">
            Fields cannot be empty
          </div>
        </FlashMessage>
        <div className="control mb-3">
          <div className="select">
            <select value={media} onChange={(e) => setMedia(e.target.value)}>
              <option>Select Media</option>
              <option>Music</option>
              <option>Games</option>
              <option>Movies</option>
            </select>
          </div>
        </div>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input mb-3"
            placeholder="Title: "
          ></input>
        </div>
        <div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="textarea mb-3"
            placeholder="What are you about to babble about!?"
          ></textarea>
        </div>
        {category === "Review" ? (
          <div>
            <input
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="input mb-3"
              placeholder="Score: "
            ></input>
          </div>
        ) : (
          ""
        )}
        <button className="btn m-auto">Create Post</button>
      </form>
    </>
  );
}

export default NewPost;
