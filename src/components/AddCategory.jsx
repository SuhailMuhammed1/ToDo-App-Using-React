import React, { useContext, useState } from "react";
import { categoryImages } from "./Data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskContext } from "./context/TaskContext";

function AddCategory(
  {
    // addCategoryRef,
    // addNewCategory,
    // categoryImages,
    // addCategory,
    // toggleAddCategory,
    // updateCategory,
    // isEditCategory = false,
    // existingCategory = null,
  }
) {
  const {
    addCategoryRef,
    addNewCategory,
    addCategory,
    toggleAddCategory,
    updateCategory,
    isEditCategory = false,
    editingCategory = null,
  } = useContext(TaskContext);

  const [title, setTitle] = useState(
    isEditCategory && editingCategory ? editingCategory.title : ""
  );
  const [selectedImg, setSelectedImg] = useState(
    isEditCategory && editingCategory ? editingCategory.img : ""
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
          originalTitle: editingCategory.title,
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
