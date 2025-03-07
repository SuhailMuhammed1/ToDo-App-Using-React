import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import AuthForm from "./AuthForm";

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
    <AuthForm
      title="Login"
      subtitle="Login to your account"
      fields={[
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
      ]}
      buttonText="Login"
      onSubmit={handleSubmit}
      error={error}
      linkText="Don't have an account?"
      linkPath="/register"
    />
  );
}

export default Login;
