import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskContext } from "./context/TaskContext";

function AddTask(
  {
    // addTasks,
    // addTaskRef,
    // addNewTask,
    // categories,
    // toggleAddTask,
    // isEditingTask,
    // taskToEdit,
    // updateTask,
  }
) {
  const {
    isAddTaskOpen,
    closeAddTask,
    addTasks,
    addTaskRef,
    addNewTask,
    categories,
    toggleAddTask,
    isEditingTask,
    taskToEdit,
    updateTask,
  } = useContext(TaskContext);

  const [newTask, setNewTask] = useState(taskToEdit ? taskToEdit.task : "");

  const handleSaveTask = () => {
    if (!newTask.trim()) {
      if (!toast.isActive("enterTask")) {
        toast.error("Please enter a task!!!", {
          toastId: "enterTask",
        });
      }
    } else {
      if (isEditingTask) {
        updateTask({ ...taskToEdit, task: newTask });
      } else {
        addNewTask({
          id: Date.now(),
          task: newTask,
          category: categories,
          completed: false,
        });
      }
      setNewTask("");
    }
  };

  if (!isAddTaskOpen) return null;

  return (
    <div className={`add-task ${addTasks ? "active" : ""}`} ref={addTaskRef}>
      <div className="add-tasks add-task-backdrop"></div>
      <h1 className="heading">{isEditingTask ? "Edit Task" : "Add Task"}</h1>
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
        <button className="cancel-btn" onClick={closeAddTask}>
          Cancel2
        </button>
        <button className="add-btn" onClick={handleSaveTask}>
          {isEditingTask ? "Save Changes" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default AddTask;
