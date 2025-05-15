import { Routes, Route } from "react-router-dom";
import PostDetails from "../pages/PostDetails";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";

function PostRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
}

export default PostRoutes;
