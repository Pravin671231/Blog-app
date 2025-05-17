const express = require("express");
const getUserBlogs = require("../controllers/blogControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/myblogs", getUserBlogs, protect); //Protected

module.exports = router;
