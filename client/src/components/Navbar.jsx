import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Blog app
      </Link>
      <Link className="btn btn-outline-light ms-auto" to="/create">
        New Post
      </Link>
      {user ? (
        <>
          <span className="me-2">Hi, {user.username}</span>
          <button onClick={logout} className="btn btn-outline-danger btn-sm">
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="btn btn-outline-primary">
          Login
        </Link>
      )}

      <div className="ml-auto"></div>
    </nav>
  );
}

export default Navbar;
