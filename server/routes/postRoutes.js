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
//@route POST /api/posts
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

//@route PUT /api/posts:id
//@desc updated single post

router.put("/:id", async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, body, author },
      { new: true, runValidators: true }
    );
    if (!updatedPost) return res.status(404).json({ message });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@route DELETE /api/posts:id
//@desc delete single post

router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    if (!deletePost) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post delete successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
