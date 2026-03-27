import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "./Homepage";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessageType("error");
      setMessage("Username and password cannot be empty.");
      return;
    }

    if (password.length < 8) {
      setMessageType("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      const user = users.find((u) => u.username === username);

      if (user && user.email === password) {
        setMessageType("success");
        setMessage("Login successful!");
      } else {
        setMessageType("error");
        setMessage("Invalid username or password.");
      }
    } catch (error) {
      setMessageType("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (messageType === "success") {
      const timer = setTimeout(() => {
        navigate("/flavors");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messageType, navigate]);

  return (
    <div className="main-section">
      <form onSubmit={handleLogin}>
        <h2>Login to Sweet Scoop</h2>

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
        <div>
          <a href="#forgot" className="forgot-password">Forgot Password?</a>
        </div>
      </form>

      {message && <DisplayStatus type={messageType} message={message} />}
    </div>
  );
};

const DisplayStatus = ({ type, message }) => {
  const messageClass = type === "success" ? "success-message" : "error-message";

  return <div className={messageClass}>{message}</div>;
};

export default LoginPage;
