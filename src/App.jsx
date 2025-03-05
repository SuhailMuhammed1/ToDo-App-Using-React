import React from "react";
import "./App.css";
import { TaskProvider } from "./components/context/TaskContext";
import LayoutRoutes from "./components/LayoutRoutes";

function App() {
  return (
    <TaskProvider>
      <LayoutRoutes />
    </TaskProvider>
  );
}

export default App;
