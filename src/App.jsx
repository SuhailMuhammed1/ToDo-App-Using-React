import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CategoryScreen from "./components/CategoryScreen";
import AddTask from "./components/AddTask";

function App() {
  const [category, setCategory] = useState(false);

  const toggleCategory = () => {
    setCategory(!category);
  };

  return (
    <div className={`wrapper ${category ? "show-category" : ""}`}>
      <div className="screen-backdrop"></div>
      <HomeScreen toggleCategory={toggleCategory} />
      <CategoryScreen />
      <div className="add-task-btn">
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
      <div className="black-backdrop"></div>
      <AddTask />
    </div>
  );
}

export default App;
