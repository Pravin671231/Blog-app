import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Blog app
      </Link>
      <Link className="btn btn-outline-light ms-auto" to="/create">
        New Post
      </Link>

      <div className="ml-auto"></div>
    </nav>
  );
}

export default Navbar;
