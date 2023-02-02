import React from 'react'
import './Coach.css'
import coachimg from '../../images/coach.jpg'
import { useNavigate } from 'react-router'

export default function Coach() {
  const navigate = useNavigate();

  const coachLogin = () => {
    navigate('/coachlogin');
  }

  const coachSignup = () => {
    navigate('/coachsignup');
  }

  return (
    <div className="coach-card">
        <img src={coachimg} alt="coach-img"/>
        <button onClick={()=>{coachLogin()}}>Login as a Coach</button>
        <button onClick={()=>{coachSignup()}}>Join as a Coach</button>
    </div>
  )
}
