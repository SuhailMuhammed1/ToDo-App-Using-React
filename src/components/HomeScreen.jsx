import React from "react";
import boy from "../assets/images/boy.png";

function HomeScreen({
  categories,
  tasks,
  toggleCategoryScreen,
  deleteCategory,
}) {
  return (
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
            <h1>Hello John</h1>
            <p>
              Today you have <span id="total-tasks">{tasks.length}</span> tasks
            </p>
          </div>
          <div className="img">
            <div className="backdrop"></div>
            <img src={boy} alt="" />
          </div>
        </div>
      </div>
      <div className="categories-wrapper">
        <div className="categories">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div
                className="category"
                key={category.title}
                onClick={() => toggleCategoryScreen(category)}
              >
                <div className="left">
                  <img src={category.img} alt={category.title} />
                  <div className="content">
                    <h1>{category.title}</h1>
                    <p>
                      {tasks.filter((task) => task.category === category.title)
                        .length || 0}{" "}
                      Tasks
                    </p>
                  </div>
                </div>
                <div className="options">
                  <div
                    className="toggle-btn"
                    onClick={() => deleteCategory(category.title)}
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
                <p>No categories added yet!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
