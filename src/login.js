import React, { useState } from "react";
// import { AuthService } from "./services/auth_service";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");


  async function handleLogin(email, password) {
    await axios
      .post("http://18.209.105.43:3000/api/login", {
        data: {
          email: "matias@gmail.com",
          password: "matias20",
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(
        result => {
          console.log(result);          
          var token = result.data;          
        },
        (error) => console.log(error.response.data)
      );
  }

  return (
    <div>
      <label>
        Email:
        <input
          type="text"
          onChange={(email) => setEmail(email.target.value)}
          value={email}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="text"
          onChange={(password) => setPassword(password.target.value)}
          value={password}
        />
      </label>
      <button onClick={() => handleLogin(email, password)}>Login</button>

      <p>Todavia no tienes cuenta?</p>
      <Link to="/register">Regsitrate</Link>
    </div>
  );
}

export default Login;
