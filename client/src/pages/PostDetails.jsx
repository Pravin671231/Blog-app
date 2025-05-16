import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../services/postServices";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    async function fecthPost() {
      try {
        const res = await getPostById(id);
        setPost(res.data);
      } catch (error) {
        setError("Page not found");
      } finally {
        setLoading(false);
      }
    }
    fecthPost();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  const handleDelete = async () => {
    const confirm = window.confirm(
      "You are sure you want to delete this post ?"
    );
    if (confirm) {
      try {
        await deletePost(post._id);
        toast.success("Post deleted");
        navigate("/");
      } catch (err) {
        toast.error("Failed to delete post:");
      }
    }
  };

  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">{post.title}</h2>
      <p className="text-muted">
        By {post.author}- {new Date(post.createdAt).toLocaleDateString()}{" "}
      </p>
      <div className="mt-4 d-flex gap-2">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/edit/${post._id}`)}
        >
          Edit
        </button>
      </div>

      <hr />
      <p style={{ whiteSpace: "pre-wrap" }}>{post.body}</p>
    </div>
  );
}

export default PostDetails;
