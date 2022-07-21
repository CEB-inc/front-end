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

  const { category } = useParams();
  const [media, setMedia] = useState(post.media || "");
  const [title, setTitle] = useState(post.title || "");
  const [body, setBody] = useState(post.body || "");
  const [score, setScore] = useState(post.score || "");
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
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

  // What happens on submit. the press of the button.
  async function submit(e) {
    e.preventDefault();

    const updateParams = {
      ...post,
      media,
      title,
      body,
      score,
    };
    // // then give it to your redux api thing

    const response = await dispatch(updatePost(updateParams));

    const postId = response.payload._id;

    postDispatch({ type: "updatePost", payload: updateParams });

    nav(`/post/${postId}`);
  }

  return (
    <>
      <h2 className="title is-2 my-4">Edit Post {category}</h2>
      <form className="container" onSubmit={submit}>
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
        <button className="btn m-auto">Update Post</button>
      </form>
    </>
  );
}

export default EditPost;
