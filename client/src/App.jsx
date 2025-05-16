import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PostRoutes from "./routes/PostRoutes";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PostRoutes />
        <ToastContainer  position="top-right" autoClose={3000}/>
      </Router>
    </>
  );
}

export default App;
