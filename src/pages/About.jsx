import React from 'react'
import { Link } from 'react-router-dom'
import aboutimg from "../assets/images/about-img.png"
import { useAuth } from '../store/auth'

function About() {
  const {userData,loading}= useAuth()
  
  
  return (
    <div className='home-intro'>
      <div className="home-intro-left">
        <p>
          Welcome, {!loading?userData.username:` `}
        </p>
        <h2>
          Why Choose Us?
        </h2>
        <p>
          Experties: Our team consists of experienced IT professionals who are possionate about staying up-to-date with the latedt industry trends.
        </p>
        <p>
          Customization: Are you ready to take your business to the next level with cutting-edge iT solutions?
        </p>
        <p>
          Customer: Look no further! At Code Wave Technologies, we specialize in providing innovative iT services and solutions tailored to meet your unique needs.
        </p>
        <p>
          Affordability:We offer compititive pricing without compromising on the quality of our services.
        </p>
        <div className="left-intro-btn">
          <Link to={"/contact"}>
            Connect Now
          </Link>
          <Link to={"/service"}>
            Learn More
          </Link>
        </div>
      </div>
      <div className="home-intro-right">
        <img src={aboutimg} alt="hii" />
      </div>
    </div>
  )
}

export default About