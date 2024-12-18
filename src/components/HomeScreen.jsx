import React from "react";
import boy from "../assets/images/boy.png";

function HomeScreen({ categories, tasks, toggleCategoryScreen }) {
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
          {categories.map((category, index) => {
            const categoryTasks = tasks.filter(
              (task) =>
                task.category.toLowerCase() === category.title.toLowerCase()
            );
            return (
              <div
                className="category"
                key={index}
                onClick={() => toggleCategoryScreen(category)}
              >
                <div className="left">
                  <img src={category.img} alt={category.title} />
                  <div className="content">
                    <h1>{category.title}</h1>
                    <p>{categoryTasks.length} Tasks</p>
                  </div>
                </div>
                <div className="options">
                  <div className="toggle-btn">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
