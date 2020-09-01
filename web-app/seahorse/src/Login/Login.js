import React, { useState } from "react";
import { authServiceLogIn } from "../services/AuthService";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function logIn(e) {
    e.preventDefault();
    authServiceLogIn(login, password);
    return false;
  }

  return (
    <form onSubmit={logIn}>
      <div>
        <div>
          <label htmlFor="login">Login</label>
          <input
            value={login}
            type="text"
            name="login"
            id="login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-button">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
