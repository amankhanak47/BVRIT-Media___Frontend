import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./member.css";
// import av from "./logo.png";

export default function Memberlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/auth/userslogin`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();

    if (json.sucess) {
        navigate("/member");
        localStorage.setItem('member-token',json.authtoken)
      //    alert(`TOKEN : ${json.authtoken}`)
    } else {
      alert(`ERROR : ${json.errors[0].msg}`);
    }
  };
  return (
     <div className="allsignup">
        <Navbar opt="Login"/>
    <div className="login">
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Member Login</h1>
        
        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Email Address *"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-footer-desc">
          <p>
            Dont Have An Account? <Link to={"/membersignup"}> Signup</Link>
          </p>
        </div>
      </form>
      <div className="right-login">
        {/* <img src={av} alt="" /> */}
      </div>
      </div>
      </div>
  );
}
