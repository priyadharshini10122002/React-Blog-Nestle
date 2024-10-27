import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import "./Blog.css";
export default function Blog() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { Blogs, editing, setEditing, editBlog, deleteBlog, setBlogs } =
    useContext(BlogContext);
  // console.log(Blogs);
  // console.log(id);
  // console.log("In Blogs");
  const current_blog = Blogs.filter((blog) => blog.id == id);
  // console.log(current_blog);

  const deleteBlogInfo = (delete_id) => {
    deleteBlog(delete_id);
  };

  const editBlogInfo = (id) => {
    setEditing((editing) => !editing);
    navigate("/blog/edit", { state: { editblogid: id } });
  };

  return (
    <div>
      <div className="blog-data">
        {current_blog.map((value) => {
          return (
            <div key={value.id}>
              <h1>{value.title}</h1>
              <h2>Author : {value.author}</h2>
              <h3>Category : {value.category}</h3>
              <p>Content : {value.body}</p>
              <h4>Tags : {value.tags}</h4>
              <div>
                <button onClick={() => deleteBlogInfo(value.id)}>
                  Delete Blog
                </button>
                <button onClick={() => editBlogInfo(value.id)}>
                  Edit blog
                </button>

                <Link to="/blogs" className="back-link">
                  Back to Blogs
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
