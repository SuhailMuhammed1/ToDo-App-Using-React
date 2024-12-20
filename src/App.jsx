import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CategoryScreen from "./components/CategoryScreen";
import AddTask from "./components/AddTask";
import { categories, tasks } from "./components/Data";

function App() {
  const [task, setTask] = useState(tasks);
  const [addTasks, setAddTasks] = useState(false);
  const addTaskRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryScreen, setShowCategoryScreen] = useState(false);

  const toggleCategoryScreen = (category) => {
    setSelectedCategory(category);
    setShowCategoryScreen(!showCategoryScreen);
  };

  const addNewTask = (newTask) => {
    setTask((prevTasks) => [...prevTasks, newTask]);
    setAddTasks(false);
  };

  const deleteTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleAddTask = () => {
    setAddTasks(!addTasks);
  };

  const handleClickOutside = (event) => {
    if (addTaskRef.current && !addTaskRef.current.contains(event.target)) {
      setAddTasks(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`wrapper ${showCategoryScreen ? "show-category" : ""}`}>
      <div className="screen-backdrop"></div>
      <HomeScreen
        categories={categories}
        tasks={task}
        toggleCategoryScreen={toggleCategoryScreen}
      />
      {selectedCategory && (
        <CategoryScreen
          category={selectedCategory}
          tasks={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          back={() => setShowCategoryScreen(false)}
        />
      )}
      <div
        className={`add-task-btn ${addTasks ? "active" : ""}`}
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
      <div className={`black-backdrop ${addTasks ? "active" : ""}`}></div>
      <AddTask
        addTasks={addTasks}
        addTaskRef={addTaskRef}
        addNewTask={addNewTask}
        categories={categories}
        toggleAddTask={toggleAddTask}
      />
    </div>
  );
}

export default App;
