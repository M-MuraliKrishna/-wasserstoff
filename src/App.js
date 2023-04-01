import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Style.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import OverView from "./Components/OverView";
import Dashboard from "./Components/Dashboard";
import Analytices from "./Components/Analytices";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<OverView />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard" element={<Analytices />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
