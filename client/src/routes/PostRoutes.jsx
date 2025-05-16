import { Routes, Route } from "react-router-dom";
import PostDetails from "../pages/PostDetails";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Login from "./Login";
import Register from "./Register";

function PostRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}

export default PostRoutes;
