import React, { useEffect } from 'react'
import Image1 from '../assets/images/home-img-1.png'
import Image2 from '../assets/images/home-img-2.png'
import {Link, useNavigate} from 'react-router-dom'

import "./home.css"
function Home() {
  
  return (
    <div className='home-section'>
      <div className='home-intro'>
        <div className="home-intro-left">
          <p>
            We are the World Best IT Company
          </p>
          <h2>
            Welcome to Code Wave Technologies
          </h2>
          <p>
            Are you ready to take your business to the next level with cutting-edge iT solutions? Look no further! At Code Wave Technologies, we specialize in providing innovative iT services and solutions tailored to meet your unique needs.
          </p>
          <div className="left-intro-btn">
            <Link to={"/contact"}>
              Connect Now
            </Link>
            <Link to={"/services"}>
              Learn More
            </Link>
          </div>
        </div>
        <div className="home-intro-right">
          <img src={Image1} alt="hii" />
        </div>
      </div>
      <div className="home-info-one">
        <div className="one-box">
          <h2>50+</h2>
          <p>Registered Companies</p>
        </div>
        <div className="one-box">
          <h2>100.00+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="one-box">
          <h2>500+</h2>
          <p>Well Known Devlopers</p>
        </div>
        <div className="one-box">
          <h2>24/7</h2>
          <p>Service</p>
        </div> 
      </div>
      <div className='home-intro'>
      <div className="home-intro-right">
          <img src={Image2} alt="hii" />
        </div>
        <div className="home-intro-left">
          <p>
            We are here to help you
          </p>
          <h2>
            Get Started Today
          </h2>
          <p>
            Ready to take the first step towords a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Code Wave Technologies can help your business thrive in the digital age.
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
        
      </div>
    </div>
  )
}

export default Home