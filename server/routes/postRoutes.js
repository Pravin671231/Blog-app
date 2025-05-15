const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

//@route GET /api/posts
//@desc Get all posts

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//@route GET /api/posts:id
//@desc get single post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//@route POST /api/posts:id
//@desc create a new post

router.post("/", async (req, res) => {
  const { title, body, author } = req.body;
  try {
    const newPost = new Post({ title, body, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
