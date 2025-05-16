import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postServices";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fecthPosts() {
      try {
        const res = await getAllPosts();
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      } finally {
        setLoading(false);
      }
    }
    fecthPosts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <>
      <h2 className="mb-4">Latest Posts</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div className="col mb-3" key={post._id}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.body.length > 100
                    ? post.body.slice(0, 100) + "..."
                    : post.body}
                </p>
                <Link
                  to={`posts/${post._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Read more
                </Link>
              </div>
              <div className="card-footer text-muted">
                By {post.author}-{new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
