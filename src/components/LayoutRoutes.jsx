import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import CategoryScreen from "./CategoryScreen";
import Home from "./Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import { TaskContext } from "./context/TaskContext";

function LayoutRoutes() {
  const { user } = useContext(TaskContext);
  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Router>
      {/* <Home> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:categoryTitle"
          element={
            <ProtectedRoute>
              <CategoryScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* </Home> */}
    </Router>
  );
}

export default LayoutRoutes;
