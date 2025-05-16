import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postServices";
import { toast } from "react-toastify";

function CreatePost() {
  const [form, setForm] = useState({ title: "", body: "", author: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.body || !form.author) {
      toast.error("All fields are required");
      return;
    }
    setError("");
    try {
      await createPost(form);
      toast.success("Post created successfully");
      navigate("/");
    } catch (err) {
      toast.error("Failed to create post.");
    }
  };

  return (
    <div className="card shadow p-4 ">
      <h2>Create New Blog Post</h2>
      {error && <div className="alert alert-danger">{error} </div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            name="body"
            rows="5"
            value={form.body}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
