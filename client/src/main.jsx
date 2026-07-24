import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./Pages/Home.jsx";
import "./index.css";
import Register from "./Pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);
