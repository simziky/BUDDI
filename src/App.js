import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Description from "./pages/Description";
import Home from "./pages/Home";
import Store from "./pages/own-a-store";
import Form from "./pages/form/index"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Home" element={<Home />} />
          <Route path="Description" element={<Description />} />
          <Route path="Store" element={<Store />} />
          <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
