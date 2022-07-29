import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Description from "./pages/Description";
import Home from "./pages/Home";
import Store from "./pages/own-a-store";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Home" element={<Home />} />
          <Route path="about" element={<Description />} />
          <Route path="about" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
