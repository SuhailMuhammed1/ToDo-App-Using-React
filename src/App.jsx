import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CategoryScreen from "./components/CategoryScreen";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="wrapper">
      <div className="screen-backdrop"></div>
      <HomeScreen />
      <CategoryScreen />
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
      <AddTask />
    </div>
  );
}

export default App;
