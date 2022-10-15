import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Error from "./quiz/Error";
const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [error, setError] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    // const {email,password} =user
    axios.post("http://localhost:9000/login", user).then((res) => {
      alert(res.data.message);
      

      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <div className="login">
      {/* {console.log(user)} */}
      {error && history.push('/')}
      <div className="loginForm">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Your Email"
          className="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="password"
          className="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button className="loginButton" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
