//@desc Get blogs by logged-in User
//@route GET /api/blogs/myblogs
//@access Private

const Blog = require("../models/Blog");

const getUserBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user.id });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fecthing user blogs" });
  }
};

module.exports = getUserBlogs;
