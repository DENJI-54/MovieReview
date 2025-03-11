import express from "express";
import { createblog, getblog } from "../controllers/blog.js";

import checkForAuthCookie from "../middlewear/auth.js";
import blogs from "../models/blogModel.js";
const blogRouter = express.Router();
const getblogRouter = express.Router();


blogRouter.get("/", (req, res) => {
  return res.render("blog",{
    user:req.user
  });
});



blogRouter.post("/",createblog);



export { blogRouter, getblogRouter };


