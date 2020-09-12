import React, { useState } from "react";
import { FaKey, FaUserCircle } from "react-icons/fa";
import "./Login.scss";
import axios from "axios";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function logIn(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "/auth/signin",
      data: { login, password },
    })
      .then(function (response) {
        localStorage.setItem("IS_LOGGED_IN", "true");
        window.open("/", "_self");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setErrorMessage("User name and password do not match");
      });
  }

  return (
    <div className="login-form-wrapper">
      <form onSubmit={logIn} className="login-panel">
        <p className="error">{errorMessage}</p>

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
