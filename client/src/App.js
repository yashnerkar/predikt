import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Prediction from "./pages/Prediction";
import "normalize.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/History" element={<History />} />
        <Route path="/Diagnose" element={<Prediction />} />
      </Routes>
    </Router>
  );
};

export default App;
