import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

function AuthForm({
  title,
  subtitle,
  fields,
  buttonText,
  onSubmit,
  error,
  linkText,
  linkPath,
}) {
  return (
    <div className="auth-container">
      <div className="screen-backdrop"></div>

      <div className="auth-card">
        <div className="auth-header">
          <h1>Task Manager</h1>
          <p>{subtitle}</p>
        </div>

        <form onSubmit={onSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          {fields.map(({ label, type, value, onChange, id }) => (
            <div className="input-group" key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
            </div>
          ))}

          <button type="submit" className="auth-button">
            {buttonText}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {linkText} <Link to={linkPath}>{title}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
