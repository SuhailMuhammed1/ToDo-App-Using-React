import React, { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "./context/TaskContext";
import { useNavigate } from "react-router-dom";
import AddTask from "./AddTask";

function CategoryScreen() {
  const {
    selectedCategory,
    setShowCategoryScreen,
    tasks,
    deleteTask,
    toggleTaskCompletion,
    toggleAddTask,
    setIsEditingTask,
    setTaskToEdit,
    deleteAllTasks,
    addTasks,
  } = useContext(TaskContext);

  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  if (!selectedCategory) {
    navigate("/");
    return null;
  }

  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOutsideClick = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="wrapper show-category">
      <div className="screen-backdrop"></div>
      <div className="category-screen screen">
        <div className="head-wrapper">
          <div
            className="back-btn"
            onClick={() => {
              setShowCategoryScreen(false);
              navigate("/");
            }}
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
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div>
          <div className="options" ref={optionsRef} onClick={toggleOptions}>
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
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
            {showOptions && (
              <div className="dropdown-menu">
                {/* <div
                className="dropdown-item"
                onClick={() => {
                  toggleAddCategory();
                  setIsEditCategory(true);
                  setEditingCategory(category);
                }}
              >
                Edit
              </div> */}
                <div
                  className="dropdown-item"
                  onClick={() => {
                    deleteAllTasks();
                    setShowOptions(false);
                  }}
                >
                  Delete All
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="category-details">
          <img
            src={selectedCategory.img}
            alt={selectedCategory.title}
            id="category-img"
          />
          <div className="details">
            <p id="num-tasks">{categoryTasks.length} tasks</p>
            <h1 id="category-title">{selectedCategory.title}</h1>
          </div>
        </div>
        <div className="tasks-wrapper">
          <div className="tasks">
            {categoryTasks.length > 0 ? (
              categoryTasks.map((task) => (
                <div className="task-wrapper" key={task.id}>
                  <label htmlFor={`task-${task.id}`} className="task">
                    <input
                      type="checkbox"
                      name={`task-${task.id}`}
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <span className="checkmark">
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
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <p>{task.task}</p>
                  </label>
                  <div className="side-btn">
                    <div
                      className="edit"
                      onClick={() => {
                        toggleAddTask();
                        setIsEditingTask(true);
                        setTaskToEdit(task);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="edit"
                        fill="none"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.2417871,6.58543288 L6.27024769,12.5583865 C5.94985063,12.8787836 5.54840094,13.1060806 5.1088198,13.2159758 L2.81782051,13.7887257 C2.45163027,13.8802732 2.11993389,13.5485768 2.21148144,13.1823866 L2.78423127,10.8913873 C2.89412655,10.4518062 3.12142351,10.0503565 3.44182056,9.72995942 L9.41336001,3.75700576 L12.2417871,6.58543288 Z M13.6567078,2.3434993 C14.4377564,3.12454789 14.4377564,4.39087785 13.6567078,5.17192643 L12.9488939,5.8783261 L10.1204668,3.04989898 L10.8282807,2.3434993 C11.6093293,1.56245072 12.8756592,1.56245072 13.6567078,2.3434993 Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="delete" onClick={() => deleteTask(task.id)}>
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-tasks">
                No tasks added in {selectedCategory.title}!
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className={`add-task-btn ${addTasks ? "add-tasks-btm active" : ""}`}
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

      {/* {addCategory && <AddCategory />} */}

      {addTasks && <AddTask />}
    </div>
  );
}

export default CategoryScreen;
