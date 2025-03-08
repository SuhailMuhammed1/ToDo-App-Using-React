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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Home>
        <ToastContainer position="top-center" draggable autoClose={2000} />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <HomeScreen />
              // </ProtectedRoute>
            }
          />
          {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
          <Route
            path="/category/:categoryTitle"
            element={
              // <ProtectedRoute>
              <CategoryScreen />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </Home>
    </Router>
  );
}

export default LayoutRoutes;
