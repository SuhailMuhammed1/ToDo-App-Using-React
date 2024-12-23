import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CategoryScreen from "./components/CategoryScreen";
import AddTask from "./components/AddTask";
import AddCategory from "./components/AddCategory";
import { categoryImages } from "./components/Data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);
  const addTaskRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryScreen, setShowCategoryScreen] = useState(false);
  const addCategoryRef = useRef(null);

  const toggleAddCategory = () => {
    setAddCategory(!addCategory);
  };

  const addNewCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setAddCategory(false);
    toast.success("Category added successfully!", {
      toastId: "categoryAdded",
    });
  };

  const deleteCategory = (title) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.title !== title)
    );
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.category !== title)
    );
    toast.success("Category deleted!", {
      toastId: "categoryDeleted",
    });
  };

  const updateCategory = (updatedCategory) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.title === updatedCategory.originalTitle
          ? { title: updatedCategory.title, img: updatedCategory.img }
          : category
      )
    );
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.category === updatedCategory.originalTitle
          ? { ...task, category: updatedCategory.title }
          : task
      )
    );
    toast.success("Category updated successfully!", {
      toastId: "categoryUpdated",
    });
    setShowCategoryScreen(false);
  };

  const toggleCategoryScreen = (category) => {
    setSelectedCategory(category);
    setShowCategoryScreen(!showCategoryScreen);
  };

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setAddTasks(false);
    toast.success("Task added successfully!", {
      toastId: "taskAdded",
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success("Task deleted!", {
      toastId: "taskDeleted",
    });
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success("Task completed!", {
      toastId: "taskCompleted",
    });
  };

  const toggleAddTask = () => {
    setAddTasks(!addTasks);
  };

  const handleClickOutside = (event) => {
    if (addTaskRef.current && !addTaskRef.current.contains(event.target)) {
      setAddTasks(false);
    } else if (
      addCategoryRef.current &&
      !addCategoryRef.current.contains(event.target)
    ) {
      setAddCategory(false);
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
      <ToastContainer position="top-center" draggable />
      <div className="screen-backdrop"></div>
      <HomeScreen
        categories={categories}
        tasks={tasks}
        toggleCategoryScreen={toggleCategoryScreen}
        deleteCategory={deleteCategory}
      />
      {selectedCategory && (
        <CategoryScreen
          category={selectedCategory}
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          back={() => setShowCategoryScreen(false)}
        />
      )}
      <div
        className={`add-task-btn ${
          showCategoryScreen && addTasks
            ? "add-tasks-btm active"
            : !showCategoryScreen && addCategory
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
            : !showCategoryScreen && addCategory
            ? "active"
            : ""
        }`}
      ></div>
      {showCategoryScreen && addTasks && (
        <AddTask
          addTasks={addTasks}
          addTaskRef={addTaskRef}
          addNewTask={addNewTask}
          categories={selectedCategory.title}
          toggleAddTask={toggleAddTask}
        />
      )}
      {addCategory && (
        <AddCategory
          addCategoryRef={addCategoryRef}
          addNewCategory={addNewCategory}
          categoryImages={categoryImages}
          addCategory={addCategory}
          toggleAddCategory={toggleAddCategory}
        />
      )}
    </div>
  );
}

export default App;
