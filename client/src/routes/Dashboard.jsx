import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("api/blogs/myblogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching user login", err);
      }
    };
    fetchUserBlogs();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Welcome, {user?.username}</h2>
      <h4>Your Blog Posts</h4>
      {blogs.length === 0 ? (
        <p>
          No posts yet. <Link to="/create">Create one</Link>!
        </p>
      ) : (
        <ul className="list-group">
          {blogs.map((blog) => (
            <li
              key={blog._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{blog.title}</span>
              <div>
                <Link
                  to={`/edit/${blog._id}`}
                  className="btn btn-sm btn-warning me-2"
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
