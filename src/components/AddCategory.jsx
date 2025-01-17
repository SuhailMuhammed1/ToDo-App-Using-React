import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCategory({
  addCategoryRef,
  addNewCategory,
  categoryImages,
  addCategory,
  toggleAddCategory,
  updateCategory,
  isEditCategory = false,
  existingCategory = null,
}) {
  const [title, setTitle] = useState(
    isEditCategory && existingCategory ? existingCategory.title : ""
  );
  const [selectedImg, setSelectedImg] = useState(
    isEditCategory && existingCategory ? existingCategory.img : ""
  );

  const handleSaveCategory = () => {
    if (!title.trim()) {
      if (!toast.isActive("enterCategory")) {
        toast.error("Please enter a category!!!", {
          toastId: "enterCategory",
        });
      }
    } else if (!selectedImg) {
      if (!toast.isActive("enterCategoryImage")) {
        toast.error("Please select an image!!!", {
          toastId: "enterCategoryImage",
        });
      }
    } else {
      if (isEditCategory) {
        updateCategory({
          originalTitle: existingCategory.title,
          title,
          img: selectedImg,
        });
      } else {
        addNewCategory({ title, img: selectedImg });
      }
      setTitle("");
      setSelectedImg("");
    }
  };

  return (
    <div
      className={`add-task ${addCategory ? "active" : ""}`}
      ref={addCategoryRef}
    >
      <div className="add-categories add-task-backdrop"></div>
      <h1 className="heading">
        {isEditCategory ? "Edit Category" : "Add Category"}
      </h1>
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
        <div className="category-images">
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
      </div>
      <div className="btns">
        <button className="cancel-btn" onClick={toggleAddCategory}>
          Cancel
        </button>
        <button className="add-btn" onClick={handleSaveCategory}>
          {isEditCategory ? "Save Changes" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default AddCategory;
