import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./member.css";
const Member = () => {
  const [user, setUser] = useState([]);

  const getallmember = async () => {
    const response = await fetch(`http://localhost:5000/auth/getallmember`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setUser(json);
  };

  useEffect(() => {
    getallmember();
  }, []);
  console.log(user);

  return (
    <>
      <div className="allmembermain">
        <Navbar opt={"Members"} />
        <div className="allmembers">
         <button to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></button>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          <Link to={"/memberprofile"}>   <div className="usericons">
        <img className="user_img"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg"
          alt=""
          />

        <p className="user_name">AMAN KHAN</p>
          </div></Link>
          

          {user &&
            user.map((user) => (
              <>
               <Link to={`/memberprofile:${user._id}`}><div className="usericons">
                  <img className="user_img" src={user.img} alt="" />

                  <p className="user_name">{user.name}</p>
                </div></Link> 
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Member;
