import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NewBlog.css";
const intial_one = {
  id: "",
  author: "",
  title: "",
  category: "",
  body: "",
  tags: [],
};

const id_removed_one = {
  author: "",
  title: "",
  category: "",
  body: "",
  tags: [],
};

export default function NewBlog() {
  const { Blogs, setBlogs, addBlog, editing, setEditing } =
    useContext(BlogContext);
  const [newblog, setNewblog] = useState(id_removed_one);

  const navigate = useNavigate();
  const location = useLocation();
  const { editblogid } = location.state || {};

  // Edit Blog stuffs

  const current_edit_blog = Blogs.filter((blog) => blog.id === editblogid);
  const extracted_data = current_edit_blog[0]
    ? current_edit_blog[0]
    : intial_one;

  const { id, ...idremoved } = extracted_data;
  const [editdata, setEditdata] = useState(idremoved);

  const updatehandleChange = (fieldName, newvalue, e) => {
    e.preventDefault();
    setEditdata({ ...editdata, [fieldName]: newvalue });
  };

  const handleChange = (fieldName, newvalue, e) => {
    e.preventDefault();
    setNewblog({ ...newblog, [fieldName]: newvalue });
  };

  const submitInfo = (newdataval) => {
    idupdate = { ...newdataval, id: uuidv4() };
    const validated = validateForm(idupdate);
    if (validated) {
      addBlog(idupdate);
      setNewblog(id_removed_one);
      navigate("/blogs");
    } else {
      alert("Kindly Fillup all fields!");
    }
  };

  const updateSubmit = (editdata) => {
    idupdate = { ...editdata, id: editblogid };
    const validated = validateForm(idupdate);
    if (validated) {
      const index = Blogs.findIndex((item) => item.id === editblogid);
      const to_remove = Blogs.splice(index, 1);
      setBlogs(to_remove);
      addBlog(idupdate);
      setEditing((editing) => !editing);
      navigate("/blogs");
    } else {
      alert("Kindly fillup ");
    }
  };

  const validateForm = (idupdate) => {
    const { id, title, author, category, body, tags } = idupdate;
    if (!id || !title || !category || !author || !tags || !body) {
      return false;
    }
    return true;
  };

  return (
    <>
      {editing ? (
        // Editing form
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateSubmit(editdata);
          }}
        >
          <h1>Edit Blog</h1>
          {Object.entries(editdata).map(([key, value]) => (
            <div className="field-container" key={key}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)} </label>
              {key === "body" ? (
                <textarea
                  id={key}
                  name={key}
                  value={value}
                  onChange={(e) => updatehandleChange(key, e.target.value, e)}
                />
              ) : (
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={value}
                  onChange={(e) => updatehandleChange(key, e.target.value, e)}
                />
              )}
              <br />
            </div>
          ))}
          <button type="submit">Save Changes</button>
          <Link to="/blogs" className="back-button">
            Cancel
          </Link>
        </form>
      ) : (
        // New form
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitInfo(newblog);
          }}
        >
          <h1>Write What's in your Mind! </h1>

          {Object.entries(newblog).map(([key, value]) => (
            <div className="field-container" key={key}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)} </label>
              {key === "body" ? (
                <textarea
                  id={key}
                  name={key}
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value, e)}
                />
              ) : (
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value, e)}
                />
              )}
              <br />
            </div>
          ))}

          <button type="submit">Submit Here</button>
          <Link to="/blogs" className="back-button">
            Back to Blogs
          </Link>
        </form>
      )}
    </>
  );
}
