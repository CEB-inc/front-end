import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import Home from "./pages/Home";
import CategorySelection from "./pages/CategorySelection";
import NewPost from "./pages/NewPost";
import ShowPost from "./pages/ShowPost";
import EditPost from "./pages/EditPost";
import StoreContext from "../store";
import useStore from "../reducer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  // dispatch is what we call(similar to setPosts), initialState is the initial state
  const [store, dispatch] = useStore();

  useEffect(() => {
    async function getPosts() {
      const res = await fetch("http://localhost:4000/api/v1/posts");
      dispatch({
        type: "setPosts",
        data: await res.json(),
      });
    }
    getPosts();
  }, []);

  // StoreContext is in store.js, the .Provider is providing ALL children with a value
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/post/:id" element={<ShowPost />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
          <Route path="/post/new/:category" element={<NewPost />} />
          <Route path="*" element={<h4>Page not found</h4>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </StoreContext.Provider>
  );
}

export default App;
