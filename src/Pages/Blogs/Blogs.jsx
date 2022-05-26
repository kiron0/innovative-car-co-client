import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import CardBlog from "./CardBlog";

const Blogs = () => {
  useTitle("BLogs");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://innovative-cars-co.herokuapp.com/blogs", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div className="breadcrumb text-center py-20 bg-base-300">
        <h2 className="text-3xl">Blog Page</h2>
        <div className="text-md breadcrumbs ">
          <ul className="justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blogs </li>
          </ul>
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <CardBlog key={blog._id} blog={blog}></CardBlog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
