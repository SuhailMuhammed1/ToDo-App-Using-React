import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCategory({
  addCategoryRef,
  addNewCategory,
  categoryImages,
  addCategory,
  toggleAddCategory,
}) {
  const [title, setTitle] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const handleAddCategory = () => {
    if (!title.trim() || !selectedImg) {
      alert("Please fill in all fields");
      return;
    }
    addNewCategory({ title, img: selectedImg });
    setTitle("");
    setSelectedImg("");
  };

  return (
    <div
      className={`add-task ${addCategory ? "active" : ""}`}
      ref={addCategoryRef}
    >
      <div className="add-task-backdrop"></div>
      <h1 className="heading">Add Category</h1>
      <div className="input-group">
        <label htmlFor="task-input"> Category </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="category-select"> Select Image </label>
        {categoryImages.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt={image.name}
            onClick={() => setSelectedImg(image.img)}
            className={selectedImg === image.img ? "selected" : ""}
          />
        ))}
      </div>
      <div className="btns">
        <button className="cancel-btn" onClick={toggleAddCategory}>
          Cancel
        </button>
        <button className="add-btn" onClick={handleAddCategory}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddCategory;
