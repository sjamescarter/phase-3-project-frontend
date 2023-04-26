import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
