import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PostRoutes from "./routes/PostRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PostRoutes />
      </Router>
    </>
  );
}

export default App;
