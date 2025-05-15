import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllPosts = () => API.get("/posts");
export const getPostById = (id) => API.get(`/posts/${id}`);
export const createPost = () => API.post("/posts", newPost);
