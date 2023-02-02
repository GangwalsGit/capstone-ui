import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header({cloggedIn, uloggedIn}) {
  if(uloggedIn) {
    return (
    <div className="header-container">
        <div className="header-logo">
            WeCare
        </div>
        <div className="header-details">
          <NavLink to='/userprofile'>My profile</NavLink>
          <NavLink to='/userappointments'>My appointment</NavLink>
          <span className="material-symbols-outlined">call</span>
          <span>Call Us : 080 2233447</span>
        </div>
    </div>
    )
  }
  if(!cloggedIn) {
    return (
      <div className="header-container">
          <div className="header-logo">
              WeCare
          </div>
          <div className="header-details">
            <span className="material-symbols-outlined">call</span>
            <span>Call Us : 080 2233447</span>
          </div>
      </div>
    )
  } else {
    return (
      <div className="header-container">
          <div className="header-logo">
              WeCare
          </div>
          <div className="header-details">
            <NavLink to='/coachprofile'>My profile</NavLink>
            <NavLink to='/coachschedules'>My schedules</NavLink>
            <span className="material-symbols-outlined">call</span>
            <span>Call Us : 080 2233447</span>
          </div>
      </div>
    )
  }
 
}
