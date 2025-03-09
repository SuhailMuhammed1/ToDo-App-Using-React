import React, { useContext, useState } from "react";
import "../components/Authentication/AuthForm.css";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import "@dicebear/adventurer";
import { TaskContext } from "./context/TaskContext";
import { useNavigate } from "react-router-dom";
import CategoryScreen from "./CategoryScreen";
import AddCategory from "./AddCategory";
import AddTask from "./AddTask";

function HomeScreen() {
  const {
    categories,
    tasks,
    toggleCategoryScreen,
    deleteCategory,
    toggleAddCategory,
    setIsEditCategory,
    setEditingCategory,
    user,
    updateUserAvatar,
    addCategory,
  } = useContext(TaskContext);

  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const navigate = useNavigate();

  // Generate a list of avatar options
  const generateAvatarOptions = () => {
    const options = [];
    const seeds = [
      "Aneka",
      "Felix",
      "Jasper",
      "Zoe",
      "Leo",
      "Mia",
      "Oliver",
      "Sophia",
      "Nathan",
      "Emma",
      "Lucas",
      "Isabella",
    ];

    for (let i = 0; i < seeds.length; i++) {
      const avatar = createAvatar(adventurer, {
        seed: seeds[i],
      });

      options.push({
        id: i,
        seed: seeds[i],
        svg: avatar.toDataUri(),
      });
    }

    return options;
  };

  const avatarOptions = generateAvatarOptions();

  const handleAvatarSelect = (seed) => {
    const avatar = createAvatar(adventurer, {
      seed: seed,
    });

    const svg = avatar.toDataUri();
    updateUserAvatar(svg, seed);
    setShowAvatarSelector(false);
  };

  return (
    <div className="wrapper">
      <div className="screen-backdrop"></div>
      <div className="home-screen screen">
        <div className="head-wrapper">
          <div className="menu-btn">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
          <div className="welcome">
            <div className="content">
              <h1>Hello {user?.name || "User"}</h1>
              <p>
                Today you have <span id="total-tasks">{tasks.length}</span>{" "}
                tasks
              </p>
            </div>
            <div
              className="img"
              onClick={() => setShowAvatarSelector(!showAvatarSelector)}
            >
              <div className="backdrop"></div>
              {user?.avatar ? (
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt="User avatar"
                />
              ) : (
                <div className="plus-icon">
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
              )}
            </div>
          </div>

          {/* Avatar selector */}
          {showAvatarSelector && (
            <div className="avatar-selector">
              <h3>Choose an avatar</h3>
              <div className="avatar-options">
                {avatarOptions.map((option) => (
                  <div
                    key={option.id}
                    className="avatar-option"
                    onClick={() => handleAvatarSelect(option.seed)}
                  >
                    <img
                      src={option.svg || "/placeholder.svg"}
                      alt={`Avatar option ${option.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="categories-wrapper">
          <div className="categories">
            {categories.length > 0 ? (
              categories.map((category) => (
                <div
                  className="category"
                  key={category.title}
                  onClick={() => {
                    toggleCategoryScreen(category);
                    navigate(`/category/${category.title}`);
                  }}
                >
                  <div className="left">
                    <img src={category.img} alt={category.title} />
                    <div className="content">
                      <h1>{category.title}</h1>
                      <p>
                        {tasks.filter(
                          (task) => task.category === category.title
                        ).length || 0}{" "}
                        Tasks
                      </p>
                    </div>
                  </div>
                  <div className="options">
                    <div
                      className="edit-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAddCategory();
                        setIsEditCategory(true);
                        setEditingCategory(category);
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
                    <div
                      className="toggle-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCategory(category.title);
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="category" style={{ justifyContent: "center" }}>
                <div className="no-categories">
                  <p>No categories added!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* {selectedCategory && <CategoryScreen />} */}

      <div
        className={`add-task-btn ${addCategory ? "active" : ""}`}
        onClick={toggleAddCategory}
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

      <div className={`black-backdrop ${addCategory ? "active" : ""}`}></div>

      {addCategory && <AddCategory />}

      {/* {showCategoryScreen && addTasks && <AddTask />} */}
    </div>
  );
}

export default HomeScreen;
