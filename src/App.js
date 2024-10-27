import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { createContext, useContext } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import BlogsLayout from "./component/BlogsLayout";
import BlogForm from "./component/BlogForm";
import Contact from "./component/Contact";

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">Blog_Nestl'e </h1>
      <div className="App">
        <div className="sidebar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "blog-link" : "navlink")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "blog-link" : "navlink")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "blog-link" : "navlink")}
          >
            Contact
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "blog-link" : "navlink")}
          >
            Blogs
          </NavLink>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<BlogsLayout />}></Route>
            <Route path="/blogs/:id" element={<Blog />}></Route>
            <Route path="/blogs/new" element={<BlogForm />}></Route>
            <Route path="/blog/edit" element={<BlogForm />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
