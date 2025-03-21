import express from "express";
import blogs from "../models/blogModel.js";

const createblog = async (req, res,next) => {
  const { title, content, blogImg } = req.body;
  console.log(req.user._id);
  const newblog = new blogs({
    title: title,
    content: content,
    blogImg: blogImg,
    createdBy: req.user._id,
  });
  try {
    await newblog.save();
    res.status(201).redirect(`/blog/${newblog._id}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getblog = async (req, res) => {
  try {
    const blog = await blogs.find({}).populate("createdBy");
    // console.log(blog);
    res.render("home", {
      blog,
    });
    // res.send(blog)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve blog" });
  }
};

export { getblog, createblog };
