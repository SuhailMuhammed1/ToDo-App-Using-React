import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import CategoryScreen from "./CategoryScreen";
import AddTask from "./AddTask";
import AddCategory from "./AddCategory";

function LayoutRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category/:categoryName" element={<CategoryScreen />} />
      </Routes>
      <AddTask />
      <AddCategory />
    </Router>
  );
}

export default LayoutRoutes;
