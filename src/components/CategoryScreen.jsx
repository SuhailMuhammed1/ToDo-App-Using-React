import React, { useState } from "react";
import boy from "../assets/images/boy.png";

function CategoryScreen({
  category,
  tasks,
  addTask,
  deleteTask,
  toggleTaskCompletion,
  back,
}) {
  const [newTask, setNewTask] = useState("");

  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === category.title.toLowerCase()
  );

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({
        id: tasks.length + 1,
        task: newTask,
        category: category.title,
        completed: false,
      });
      setNewTask("");
    }
  };

  return (
    <div className="category-screen screen">
      <div className="head-wrapper">
        <div className="back-btn" onClick={back}>
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
        <div className="options">
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
        </div>
      </div>
      <div className="category-details">
        <img src={category.img} alt={category.title} id="category-img" />
        <div className="details">
          <p id="num-tasks">8 tasks</p>
          <h1 id="category-title">{category.title}</h1>
        </div>
      </div>
      <div className="tasks-wrapper">
        <div className="tasks">
          {categoryTasks.length > 0 ? (
            categoryTasks.map((task) => (
              <div className="task-wrapper" key={task.id}>
                <label htmlFor="task" className="task">
                  <input
                    type="checkbox"
                    name="task"
                    id="task"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  {/* {task.completed ? "Undo" : "Complete"} */}
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
            ))
          ) : (
            <p className="no-tasks">No tasks added for this category</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryScreen;
