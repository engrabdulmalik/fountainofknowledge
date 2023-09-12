import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import "./App.css";
import Register from "./Register/Register";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
