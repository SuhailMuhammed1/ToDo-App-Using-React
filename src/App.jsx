import React from "react";
import "./App.css";
import { TaskProvider } from "./components/context/TaskContext";
import Home from "./components/Home";

function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;
