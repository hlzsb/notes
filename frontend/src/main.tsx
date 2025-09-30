import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import './index.css'; // 👈 important


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
	<nav style={{ padding: 10 }}>
        <Link to="/">Home</Link> | <Link to="/notes"> Notes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



