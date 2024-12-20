import React, { useState } from "react";

function AddTask({
  addTasks,
  addTaskRef,
  addNewTask,
  categories,
  toggleAddTask,
}) {
  const [newTask, setNewTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() && selectedCategory) {
      addNewTask({
        id: Date.now(),
        task: newTask,
        category: selectedCategory,
        completed: false,
      });
      setNewTask("");
      setSelectedCategory("");
    }
  };

  return (
    <div className={`add-task ${addTasks ? "active" : ""}`} ref={addTaskRef}>
      <div className="add-task-backdrop"></div>
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
      <div className="input-group">
        <label htmlFor="category-select"> Category </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
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
