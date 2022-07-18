import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import Home from "./pages/Home";
import Greeting from "./Greeting";
import Comment from "./Comment";
import Card from "./Card";
import CategorySelection from "./pages/CategorySelection";
import NewPost from "./pages/NewPost";
import ShowPost from "./pages/ShowPost";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [posts, setPosts] = useState([
    { category: "Movies", post: "Jurassic World was quite bad" },
    {
      category: "Movies",
      post: "Moonfall was far-fetched but still an entertaining film",
    },
    { category: "Games", post: "GTA San Andreas is still the GOAT" },
    { category: "Music", post: "The new Khruangbin album is LIT!!!" },
  ]);

  // higher order component
  function ShowPostWrapper() {
    const { id } = useParams();
    return <ShowPost post={posts[id]} />;
  }

  function addPost(category, post) {
    const newPost = { category, post };
    const id = posts.length;
    setPosts([...posts, newPost]);
    return id;
  }

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/post/:id" element={<ShowPostWrapper />} />
          <Route
            path="/post/new/:category"
            element={<NewPost addPost={addPost} />}
          />
          <Route path="*" element={<h4>Page not found</h4>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
