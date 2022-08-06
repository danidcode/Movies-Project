import React, { useContext } from "react";
import MovieLogo from "../movies_logo.webp";
const Login = () => {
  return (
    <div className="layout-login">
      <div className="login">
        <div className="login-image">
          <img src={MovieLogo}></img>
        </div>

        <div className="login-content">
          <div className="login-content-form">
            <div className="login-content-form-group name">
              <input
                type="input"
                className="form-field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label for="name" className="form__label">
                Name
              </label>
            </div>
            <div className="login-content-form-group password">
              <input
                type="password"
                className="form-field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label for="name" className="form__label">
                Password
              </label>
            </div>

            <div>
              <button className="login-content-form-button">Sing in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
