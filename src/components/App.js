import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";

function App() {
  return (
    <div>
    {/* <Header></Header> */}
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/read" element={<Blog />} />
      {/* <Route path="/*" element={<Error />} /> */}
    </Routes>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;