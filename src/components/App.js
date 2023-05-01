import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import AddPost from "./AddPost";
import Login from "./Login";

const API = "http://localhost:9292"

function App() {
  const [posts, setPosts] = useState()
  const [login, setLogin] = useState(false)

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

  function onPostDelete(id) {
    fetch('http://localhost:9292/posts/' + id, {
        method: "DELETE",
    })
    .then(r => r.json())
    .then(data => setPosts([...posts.filter(post => post.id !== data.id)]));
}

  return (
    <div>
    <Header>
      <NavBar login={login} />
    </Header>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/read" element={<Blog posts={posts} />} />
      <Route path="/read/:id" element={<BlogPost onPostDelete={onPostDelete} login={login} />} />
      <Route path="/login" element={<Login login={login} setLogin={setLogin} />} />
      <Route path="/write" element={<AddPost login={login} onSubmit={onSubmit} />} />
      {/* <Route path="/*" element={<Error />} /> */}
    </Routes>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
