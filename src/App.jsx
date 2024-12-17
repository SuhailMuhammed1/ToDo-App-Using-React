import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CategoryScreen from "./components/CategoryScreen";
import AddTask from "./components/AddTask";

function App() {
  const [category, setCategory] = useState(false);
  const [addTask, setAddTask] = useState(false);

  const toggleScreen = () => {
    setCategory(!category);
  };

  const toggleAddTask = () => {
    setAddTask(!addTask);
  };

  const handleClickOutside = () => {
    if (addTask) {
      setAddTask(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addTask]);

  return (
    <div className={`wrapper ${category ? "show-category" : ""}`}>
      <div className="screen-backdrop"></div>
      <HomeScreen toggleScreen={toggleScreen} />
      <CategoryScreen />
      <div
        className={`add-task-btn ${addTask ? "active" : ""}`}
        onClick={toggleAddTask}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <div className={`black-backdrop ${addTask ? "active" : ""}`}></div>
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
