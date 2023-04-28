import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import AddPost from "./AddPost";

function App() {
  return (
    <div>
    {/* <Header></Header> */}
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/read" element={<Blog />} />
      <Route path="/read/:id" element={<BlogPost />} />
      <Route path="/write" element={<AddPost />} />
      {/* <Route path="/*" element={<Error />} /> */}
    </Routes>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
