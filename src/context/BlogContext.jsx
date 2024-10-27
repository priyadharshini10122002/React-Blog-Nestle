const blog_info = [
  // Domain: Development
  {
    id: 1,
    author: "Priyadharshini Ramachandran",
    title: "React Router",
    category: "Development",
    body: "React Router is a popular library for managing navigation and routing in React applications. It enables developers to define multiple routes and display specific components based on the URL path. With features like nested routes, dynamic routing, and route parameters, React Router allows for complex navigation flows. It also supports navigation methods such as `useNavigate` for programmatic navigation and `Outlet` for rendering child routes.",
    tags: ["React", "Router", "Routing"],
  },
  {
    id: 2,
    author: "Priyadharshini Ramachandran",
    title: "Understanding React State Management",
    category: "Development",
    body: "State management in React is crucial for building dynamic applications. Tools like `useState` and `useReducer` offer built-in solutions, but libraries like Redux or Zustand provide more robust state management for complex applications. Understanding when and how to manage state can greatly enhance the performance and maintainability of React apps.",
    tags: ["React", "State Management", "JavaScript"],
  },

  // Domain: Law and Governance
  {
    id: 3,
    author: "Ramya Ramachandran",
    title: "RTI Act",
    category: "Law and Governance",
    body: "The Right to Information Act empowers Indian citizens to request information from public authorities, enhancing transparency and accountability. Enacted in 2005, the RTI Act revolutionized governance, helping combat corruption by ensuring that government records are open to scrutiny.",
    tags: ["RTI", "Transparency", "Governance"],
  },
  {
    id: 4,
    author: "Ramya Ramachandran",
    title: "The Indian Constitution",
    category: "Law and Governance",
    body: "The Indian Constitution is the supreme law of India, laying down the framework that defines the political principles, procedures, and powers of the government. Adopted in 1950, it is the longest written constitution of any sovereign country and guarantees fundamental rights to its citizens.",
    tags: ["Constitution", "India", "Law"],
  },

  // Domain: Education
  {
    id: 7,
    author: "Sneha Iyer",
    title: "The Importance of Digital Literacy",
    category: "Education",
    body: "In today's digital world, digital literacy has become essential. It involves not only the ability to use technology but also to understand and evaluate digital content critically. Promoting digital literacy helps individuals become informed citizens and prepares them for the workforce of the future.",
    tags: ["Digital Literacy", "Education", "Technology"],
  },
  {
    id: 8,
    author: "Sneha Iyer",
    title: "Future of Online Learning",
    category: "Education",
    body: "The rise of online learning platforms like Coursera and edX has reshaped the education landscape. These platforms offer flexibility, accessibility, and personalized learning experiences. As the world continues to adopt hybrid models, the future of education will see more innovative use of technology.",
    tags: ["Online Learning", "Education", "E-learning"],
  },

  // Domain: Health and Wellness
  {
    id: 9,
    author: "Meena Nair",
    title: "Mental Health Awareness",
    category: "Health and Wellness",
    body: "Mental health has gained significant attention in recent years. With increasing stress, anxiety, and depression cases, it is important to recognize the need for mental health support. Awareness, therapy, and lifestyle changes are vital steps toward improving one's mental well-being.",
    tags: ["Mental Health", "Awareness", "Wellness"],
  },
  {
    id: 10,
    author: "Meena Nair",
    title: "The Benefits of Meditation",
    category: "Health and Wellness",
    body: "Meditation has been proven to reduce stress, improve focus, and enhance emotional health. By practicing mindfulness and staying present, individuals can experience increased mental clarity, better decision-making, and an overall sense of peace and balance in their lives.",
    tags: ["Meditation", "Wellness", "Health"],
  },
];

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const BlogContext = React.createContext({
  Blogs: blog_info,
  setBlogs: () => {},
  addBlog: () => {},
  editBlog: () => {},
  deleteBlog: () => {},
});

const BlogContextProvider = (probs) => {
  const [Blogs, setBlogs] = useState(blog_info);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  const addBlog = (newblog) => {
    const updatedBlogs = [...Blogs, newblog];
    setBlogs(updatedBlogs);
  };

  // const editBlog = (edited, id) => {
  //   const editedblog = Blogs.map((item, index) =>
  //     index === id ? edited : item
  //   );
  //   setBlogs(editedblog);
  // };

  const deleteBlog = (delete_id) => {
    const index = Blogs.findIndex((item) => item.id === delete_id);
    Blogs.splice(index, 1);
    navigate("/blogs");
  };

  return (
    <BlogContext.Provider
      value={{
        Blogs,
        setBlogs,
        addBlog,
        deleteBlog,
        editing,
        setEditing,
      }}
    >
      {probs.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
