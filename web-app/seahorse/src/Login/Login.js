import React, { useState } from "react";
import { authServiceLogIn } from "../services/AuthService";
import { FaKey, FaUserCircle } from "react-icons/fa";
import "./Login.scss";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function logIn(e) {
    e.preventDefault();
    authServiceLogIn(login, password);
    return false;
  }

  return (
    <div className="login-form-wrapper">
      <form onSubmit={logIn} className="login-panel">
        <div className="username">
          <label htmlFor="login">
            Login <FaUserCircle />
          </label>
          <input
            value={login}
            type="text"
            name="login"
            id="login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">
            Password <FaKey />
          </label>
          <input
            value={password}
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-button">
          <button type="submit" className="button button--primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
