import React from 'react'
import errorimg from '../assets/images/error-img.png'
import { Link } from 'react-router-dom'
import "./error.css"
function Error() {
  return (
    <div className='error-sec'>
      <img src={errorimg} alt="" />
      <h2>page not found</h2>
      <p>Oops ! it's seems like the page you are trying to access doesn't exist. If you believe there's on issue. feel free to report it, and we'll look into it.</p>
      <div className="error-btn">
        <Link to={"/"}>
          Return home
        </Link>
        <Link to={"/contact"}>
          Report problem
        </Link>
      </div>
    </div>
  )
}

export default Error