import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="new" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
