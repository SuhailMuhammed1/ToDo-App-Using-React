import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask({
  addTasks,
  addTaskRef,
  addNewTask,
  categories,
  toggleAddTask,
}) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) {
      if (!toast.isActive("enterTask")) {
        toast.error("Please enter a task!!!", {
          toastId: "enterTask",
        });
      }
    } else {
      addNewTask({
        id: Date.now(),
        task: newTask,
        category: categories,
        completed: false,
      });
      setNewTask("");
    }
  };

  return (
    <div className={`add-task ${addTasks ? "active" : ""}`} ref={addTaskRef}>
      <div className="add-tasks add-task-backdrop"></div>
      <h1 className="heading">Add Task</h1>
      <div className="input-group">
        <label htmlFor="task-input"> Task </label>
        <input
          type="text"
          id="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
      </div>
      <div className="btns">
        <button className="cancel-btn" onClick={toggleAddTask}>
          Cancel
        </button>
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
