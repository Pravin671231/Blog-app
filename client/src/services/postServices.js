import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllPosts = () => API.get("/posts");
export const getPostById = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, postData) => API.put(`/posts/${id}`, postData);
