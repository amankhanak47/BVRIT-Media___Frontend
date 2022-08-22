import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./member.css";
import Navbar from '../components/Navbar'

import FileBase64 from "react-file-base64";

export default function MemberSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [img, setImg] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");

  let navigate = useNavigate();
  const changeIng = (e) => {
    setImg(e.target.value);
    console.log(img)
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(img, about);
    const response = await fetch(`http://localhost:5000/auth/userssignup`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        mobile: mobile,
        about: about,
        img: img,
      }),
    });
    const json = await response.json();

    if (json.sucess) {
      navigate("/member");
        localStorage.setItem('member-token',json.authtoken)
      //    alert(`TOKEN : ${json.authtoken}`)
    }
  };
  return (
    <div className="allsignup">
        <Navbar opt={"Signup"}/>
    <div className="login">
        
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Member Signup</h1>

        <div className="login-inputcontainer">
          <div>
            <label htmlFor="name" className="inp-component">
              <input
                placeholder="Name *"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="inp-component" htmlFor="email">
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
            <label htmlFor="mobile" className="inp-component">
              <input
                placeholder="Mobile_no *"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                className="login-input"
                type="number"
              />
            </label>
          </div>
          <div>
            <label htmlFor="about" className="inp-component">
              <input
                placeholder="About *"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="img" className="inp-component">

            <FileBase64 className="login-input" multiple={false} onDone={changeIng} />
            </label>
            <img src={img} alt="" />
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
          <div>
            <label htmlFor="conform-password" className="inp-component">
              <input
                placeholder="Conform Password *"
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Signup
        </button>
        <div className="login-footer-desc">
          <p>
            Already Have An Account? <Link to={"/memberlogin"}> Login</Link>
          </p>
        </div>
      </form>
      <div className="right-login">
        <img src={"alskd"} alt="alt" />
      </div>
    </div>
    </div>
  );
}
