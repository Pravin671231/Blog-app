import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatedPost } from "../services/postServices";

function EditPost() {
  const [form, setForm] = useState({ title: "", body: "", author: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      const res = await getPostById(id);
      setForm(res.data);
    }
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatedPost(id, form);
      navigate(`/posts/${id}`);
    } catch (err) {
      console.error("Failed to update post", err);
    }
  };

  return (
    <div className="card shadow p-4 ">
      <h2>Edit Post</h2>

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
        <button type="submit" className="btn btn-success">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
