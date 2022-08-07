import React, { useContext, useEffect, useState } from "react";
import MovieLogo from "../movies_logo.webp";
import movieContext from "../context/Movies/MovieContext";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const Login = () => {
  useEffect(() => {
    generateToken();
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [sendingForm, setSendingForm] = useState(false);
  const { generateToken, sendLogin } = useContext(movieContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendingForm(true);
    let res = await sendLogin(name, password);
    setSendingForm(false);
    if (res === "logged") {
    } else if (res == 400) {
      MySwal.fire({
        title: <p> An error has occurred</p>,
        icon: "error",
        text: "Try again",
        confirmButtonText: "Ok",
      });
    } else if (res == 401) {
    }
  };

  return (
    <div className="layout-login">
      <div className="login">
        <div className="login-image">
          <img src={MovieLogo}></img>
        </div>

        <div className="login-content">
          <form className="login-content-form" onSubmit={handleSubmit}>
            <div className="login-content-form-group name">
              <input
                type="input"
                className="form-field"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="form__label">Name</label>
            </div>
            <div className="login-content-form-group password">
              <input
                type="password"
                className="form-field"
                placeholder="Name"
                name="name"
                id="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="form__label">Password</label>
            </div>

            <div>
              {sendingForm ? (
                <Spinner animation="border" variant="secondary" />
              ) : (
                <button type="submit" className="login-content-form-button">
                  Sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
