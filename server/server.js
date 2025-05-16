require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();

//connect to MongoDB
connectDB();

//middleware
app.use(cors());
app.use(express.json()); //To parse json bodies

// route
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.POR || 5000;

app.listen(PORT, () => {
  console.log(`Server running PORT ${PORT}`);
});
