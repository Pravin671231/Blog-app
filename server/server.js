require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

//connect to MongoDB
connectDB();

//middleware
app.use(cors());
app.use(express.json()); //To parse json bodies

//test route

app.get("/", (req,res) => {
  res.send("Api is running");
});

const PORT = process.env.POR || 5000;

app.listen(PORT, () => {
  console.log(`Server running PORT ${PORT}`);
});
