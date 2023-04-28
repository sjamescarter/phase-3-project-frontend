import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import AddPost from "./AddPost";

const API = "http://localhost:9292"

function App() {
  const [posts, setPosts] = useState()

  useEffect(() => {
      fetch('http://localhost:9292/posts')
      .then(r => r.json())
      .then(data => setPosts(data))
  }, []);

  function onSubmit(endpoint, data) {
    fetch(API + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(newPost => setPosts([...posts, newPost]))
  }

  return (
    <div>
    {/* <Header></Header> */}
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/read" element={<Blog posts={posts} />} />
      <Route path="/read/:id" element={<BlogPost />} />
      <Route path="/write" element={<AddPost onSubmit={onSubmit} />} />
      {/* <Route path="/*" element={<Error />} /> */}
    </Routes>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
