import React from "react";
import { authServiceLogIn } from "../services/AuthService";

export default function Login() {
  function logIn() {
    authServiceLogIn();
    return false;
  }

  return (
    <form>
      <div>
        <div>
          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="submit-button">
          <button onClick={logIn}>Login</button>
        </div>
      </div>
    </form>
  );
}
