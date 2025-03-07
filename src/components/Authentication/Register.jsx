import React, { useContext, useState } from "react";
import "./AuthForm.css";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import AuthForm from "./AuthForm";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Assuming you'll have a context or function to handle user registration
  const { setUser } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Here you would typically make an API call to register the user
    // For demo purposes, we'll just simulate a successful registration
    const userData = {
      name: name,
      email: email,
      avatar: null,
    };

    // Set user in context or localStorage
    setUser(userData);

    // Navigate to home screen
    navigate("/login");
  };

  return (
    <AuthForm
      title="Register"
      subtitle="Create a new account"
      fields={[
        {
          label: "Name",
          type: "text",
          value: name,
          onChange: (e) => setName(e.target.value),
          id: "name",
        },
        {
          label: "Email",
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          id: "email",
        },
        {
          label: "Password",
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          id: "password",
        },
        {
          label: "Confirm Password",
          type: "password",
          value: confirmPassword,
          onChange: (e) => setConfirmPassword(e.target.value),
          id: "confirmPassword",
        },
      ]}
      buttonText="Register"
      onSubmit={handleSubmit}
      error={error}
      linkText="Already have an account?"
      linkPath="/login"
    />
  );
}

export default Register;
