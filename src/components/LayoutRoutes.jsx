import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import CategoryScreen from "./CategoryScreen";
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./AddTask";
import AddCategory from "./AddCategory";

function LayoutRoutes() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/category/:categoryName" element={<CategoryScreen />} />
        </Routes>
        <AddTask />
        <AddCategory />
      </Router>
    </TaskProvider>
  );
}

export default LayoutRoutes;
