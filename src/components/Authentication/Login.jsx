import React, { useContext, useState } from "react";
import "./AuthForm.css";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Assuming you'll have a context or function to handle authentication
  const { setUser } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Here you would typically make an API call to authenticate
    // For demo purposes, we'll just simulate a successful login
    const userData = {
      name: "John", // This would come from your API response
      email: email,
      avatar: null,
    };

    // Set user in context or localStorage
    setUser(userData);

    // Navigate to home screen
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="screen-backdrop"></div>

      <div className="auth-card">
        <div className="auth-header">
          <h1>Task Manager</h1>
          <p>Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
