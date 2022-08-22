import React from 'react'
import "./home.css"
import av from "./e9c0605f-1f1a-4626-837a-554e0e550099.jpg"
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="allhome">
        <Navbar opt="Home" />
        <div className="home_main">
          <div className="left">
            <div className="info">
              <h1>BVRIT MEDIA</h1>
              <p>A Great Photography Is One That Fully Expresses What One Feels, In The Deepest Sense, About What Is Being Photographed</p>
              <div className="btns">
                <Link to={"/members"}><button>Members</button></Link>
                <Link to={"/allphoto"}><button>Gallery</button></Link>
              </div>
            </div>
        </div>
        <div className="mid"></div>
        <div className="right"></div>

        </div>
      </div>
    </>
  )
}

export default Home