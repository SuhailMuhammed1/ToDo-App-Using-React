import React from "react";

function AddTask() {
  return (
    <div className="add-task">
      <div className="add-task-backdrop"></div>
      <h1 className="heading">Add Task</h1>
      <div className="input-group">
        <label for="task-input"> Task </label>
        <input type="text" id="task-input" required />
      </div>
      <div className="input-group">
        <label for="category-select"> Category </label>
        <select id="category-select"></select>
      </div>
      <div className="btns">
        <button className="cancel-btn">Cancel</button>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default AddTask;
