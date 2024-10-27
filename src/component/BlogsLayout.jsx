import { NavLink, Link, Outlet } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import "./BlogsLayout.css";
export default function BlogsLayout() {
  const { Blogs } = useContext(BlogContext);

  return (
    <>
      <h1>List of Blogs</h1>

      {Blogs.map((blog) => (
        <NavLink
          key={blog.id}
          to={`/blogs/${blog.id}`}
          className={({ isActive }) => (isActive ? "blog-link" : "navlink")}
        >
          {blog.title}
        </NavLink>
      ))}

      <Link className="newblog" to="/blogs/new">
        {" "}
        NewBlog{" "}
      </Link>
    </>
  );
}
