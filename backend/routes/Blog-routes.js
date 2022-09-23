import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/blog-controller.js";
import express from "express";

const blogRouters = express.Router();

blogRouters.get("/", getAllBlogs);
blogRouters.post("/add", addBlog);
blogRouters.put("/update/:id" , updateBlog);
blogRouters.get("/:id", getById);
blogRouters.delete("/:id", deleteBlog);
blogRouters.get("/user/:id", getByUserId)

export default blogRouters;