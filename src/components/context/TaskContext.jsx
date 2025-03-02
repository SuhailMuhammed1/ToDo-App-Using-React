import React, { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // States for tasks and categories
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryScreen, setShowCategoryScreen] = useState(false);

  // States for modals
  const [addTasks, setAddTasks] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Refs for detecting clicks outside modals
  const addTaskRef = useRef(null);
  const addCategoryRef = useRef(null);

  // **Category Functions**
  const toggleAddCategory = () => setAddCategory(!addCategory);

  const addNewCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setAddCategory(false);
    toast.success("Category added successfully!", { toastId: "categoryAdded" });
  };

  const deleteCategory = (title) => {
    toast(
      ({ closeToast }) => (
        <div className="alert-box">
          <p>Are you sure you want to delete the category "{title}"?</p>
          <div className="alert-box-btn">
            <button
              className="confirm-btn alert-btn"
              onClick={() => {
                setCategories((prevCategories) =>
                  prevCategories.filter((c) => c.title !== title)
                );
                setTasks((prevTasks) =>
                  prevTasks.filter((task) => task.category !== title)
                );
                toast.success("Category deleted!", {
                  toastId: "categoryDeleted",
                });
                closeToast();
              }}
            >
              Confirm
            </button>
            <button className="cancel-btns alert-btn" onClick={closeToast}>
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, toastId: "confirmation-toast" }
    );
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
    setAddCategory(false);
    setIsEditCategory(false);
    setEditingCategory(null);
  };

  const toggleCategoryScreen = (category) => {
    setSelectedCategory(category);
    setShowCategoryScreen(!showCategoryScreen);
  };

  // **Task Functions**
  const toggleAddTask = () => setAddTasks(!addTasks);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setAddTasks(false);
    toast.success("Task added successfully!", { toastId: "taskAdded" });
  };

  const deleteTask = (id) => {
    const confirmToast = () => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      toast.success("Task deleted!", {
        toastId: "taskDeleted",
      });
    };
    toast(
      ({ closeToast }) => (
        <div className="alert-box">
          <p>Are you sure you want to delete the task?</p>
          <div className="alert-box-btn">
            <button
              className="confirm-btn alert-btn"
              onClick={() => {
                confirmToast();
                closeToast();
              }}
            >
              Confirm
            </button>
            <button className="cancel-btns alert-btn" onClick={closeToast}>
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        toastId: "confirmation-toast",
      }
    );
  };

  const deleteAllTasks = () => {
    const confirmToast = () => {
      setTasks([]);
      toast.success("All Task deleted!", {
        toastId: "allTaskDeleted",
      });
    };
    toast(
      ({ closeToast }) => (
        <div className="alert-box">
          <p>Are you sure you want to delete all the task?</p>
          <div className="alert-box-btn">
            <button
              className="confirm-btn alert-btn"
              onClick={() => {
                confirmToast();
                closeToast();
              }}
            >
              Confirm
            </button>
            <button className="cancel-btns alert-btn" onClick={closeToast}>
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        toastId: "confirmation-toast",
      }
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    toast.success("Task updated successfully!", { toastId: "taskUpdated" });
    setIsEditingTask(false);
    setTaskToEdit(null);
    setAddTasks(false);
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success("Task status updated!", { toastId: "taskCompleted" });
  };

  // Handle clicking outside of modals
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        categories,
        selectedCategory,
        showCategoryScreen,
        addTasks,
        addCategory,
        isEditCategory,
        editingCategory,
        isEditingTask,
        taskToEdit,
        addTaskRef,
        addCategoryRef,
        toggleAddCategory,
        addNewCategory,
        deleteCategory,
        updateCategory,
        toggleCategoryScreen,
        toggleAddTask,
        addNewTask,
        deleteTask,
        deleteAllTasks,
        updateTask,
        toggleTaskCompletion,
        setIsEditCategory,
        setEditingCategory,
        setIsEditingTask,
        setTaskToEdit,
        setShowCategoryScreen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
