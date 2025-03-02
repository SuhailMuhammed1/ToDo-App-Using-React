import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import CategoryScreen from "./CategoryScreen";
import Home from "./Home";

function LayoutRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category/:categoryName" element={<CategoryScreen />} />
      </Routes>
    </Router>
  );
}

export default LayoutRoutes;
