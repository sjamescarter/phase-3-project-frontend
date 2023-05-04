import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import Listen from "./Listen";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import AddPost from "./AddPost";
import Login from "./Login";
import Dashboard from "./Dashboard";

const API = "http://localhost:9292"

function App() {
  const [posts, setPosts] = useState()
  const [login, setLogin] = useState(false)

  useEffect(() => {
      fetch(API + '/posts')
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
    .then(newPost => setPosts([newPost, ...posts]))
  }

  function onPostDelete(id) {
    fetch(API + '/posts/' + id, {
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
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/read" element={<Blog posts={posts} />} />
        <Route path="/read/:id" element={<BlogPost onPostDelete={onPostDelete} login={login} posts={posts} setPosts={setPosts} />} />
        <Route path="/dashboard" element={<Login login={login} setLogin={setLogin} posts={posts} />} />
        <Route path="/write" element={<AddPost login={login} onSubmit={onSubmit} />} />
        {/* <Route path="/dashboard" element={<Dashboard setLogin={setLogin} posts={posts} />} /> */}
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </div>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
