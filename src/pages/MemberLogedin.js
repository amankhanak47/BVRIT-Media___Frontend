import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

const MemberLogedin = () => {
  const [user, setUser] = useState([])
  const [imgs, setImgs] = useState([]);

  let navigate = useNavigate();
   useEffect(() => {
    if(localStorage.getItem('member-token')){
   
    }
    else{
      navigate('/memberlogin')
      
    }
   }, []);
  
  const getuser=async () => {
    //api calls
    const response = await fetch(`http://localhost:5000/auth/getmember`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('member-token')
      },
       
    });
    const json = await response.json();
   
    setUser(json);
    
  };
  const getallimgs = async () => {
    const response = await fetch(`http://localhost:5000/auth/fetchallimgs`, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: user._id}),
    });
    const images = await response.json();
    
    setImgs(images);
  };
  useEffect(() => {
    getallimgs()
    getuser()
  }, [])
  console.log(imgs)
  return (
    <div>
      <div className="allmemprofile">
      <Navbar opt={"Profile"} />
        <div className="memprof_header">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1U6R3leD7-SpCg5mG1TlxUpqVgYOBmNsXg&usqp=CAU"} alt="" />
          <div className="memprof_info">
            <h1>{"MOHD AMAN KHAN"}</h1>
            <p>{"PASSIONATE PHOTOGRAPHER FOR BVRIT SKDMSKD CD WKJ DWD KJW FWE F"}</p>
            <p>{"mohdamankhan759@gmail.com"}</p>
          </div>
          <div className="insert">
            <h1>Add New Image</h1>
            <input type="file" />
          </div>
        </div>
        <div className="memallphoto">
          {/* {imgs.map((images) => {
            <>
            <img src={images.img} alt="asdad" />
            </>
          })} */}
           <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBRZopEQCnGA/profile-displayphoto-shrink_400_400/0/1658848414721?e=1665014400&v=beta&t=3vta__wdeyjrsGHIVe8oFpzAw0rKx_pYEE6lNnjyfUg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MemberLogedin
