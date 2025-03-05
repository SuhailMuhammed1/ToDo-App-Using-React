import React, { useContext } from "react";
import HomeScreen from "./HomeScreen";
import CategoryScreen from "./CategoryScreen";
import AddCategory from "./AddCategory";
import AddTask from "./AddTask";
import { TaskContext } from "./context/TaskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const {
    showCategoryScreen,
    selectedCategory,
    addCategory,
    addTasks,
    toggleAddCategory,
    toggleAddTask,
  } = useContext(TaskContext);

  return (
    <div className={`wrapper ${showCategoryScreen ? "show-category" : ""}`}>
      <ToastContainer position="top-center" draggable autoClose={2000} />
      <div className="screen-backdrop"></div>
      <HomeScreen />
      {selectedCategory && <CategoryScreen />}
      <div
        className={`add-task-btn ${
          showCategoryScreen && addTasks
            ? "add-tasks-btm active"
            : addCategory
            ? "active"
            : ""
        }`}
        onClick={showCategoryScreen ? toggleAddTask : toggleAddCategory}
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
      <div
        className={`black-backdrop ${
          showCategoryScreen && addTasks
            ? "active"
            : addCategory
            ? "active"
            : ""
        }`}
      ></div>

      {addCategory && <AddCategory />}
      {showCategoryScreen && addTasks && <AddTask />}
    </div>
  );
}

export default Home;
