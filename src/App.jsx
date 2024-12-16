import React from "react";
import "./App.css";

function App() {
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
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
          <div className="welcome">
            <div className="content">
              <h1>Hello John</h1>
              <p>
                Today you have <span id="total-tasks">5</span> tasks
              </p>
            </div>
            <div className="img">
              <div className="backdrop"></div>
              <img src="images/boy.png" alt="" />
            </div>
          </div>
        </div>
        <div className="categories-wrapper">
          <div className="categories">
            <div className="category">
              <div className="left">
                <img src="images/boy.png" alt="sun" />
                <div className="content">
                  <h1>Personal</h1>
                  <p>5 Tasks</p>
                </div>
              </div>
              <div className="options">
                <div className="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-screen screen">
        <div className="head-wrapper">
          <div className="back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div>
          <div className="options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
        <div className="category-details">
          <img src="images/boy.png" alt="" id="category-img" />
          <div className="details">
            <p id="num-tasks">8 tasks</p>
            <h1 id="category-title">Personal</h1>
          </div>
        </div>
        <div className="tasks-wrapper">
          <div className="tasks">
            <div className="task-wrapper">
              <label for="task" className="task">
                <input type="checkbox" name="task" id="task" />
                <span className="checkmark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>Buy a new car lorem</p>
              </label>
              <div className="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-task-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <div className="black-backdrop"></div>
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
    </div>
  );
}

export default App;
