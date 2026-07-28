import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./Pages/Home.jsx";
import "./index.css";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Dasboard from "./libs/Dasboard.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/dashboard" element={<Dasboard />} />
    </Routes>
  </BrowserRouter>,
);
