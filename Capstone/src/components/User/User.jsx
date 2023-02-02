import React from 'react'
import { useNavigate } from 'react-router'
import './User.css'
import userimg from '../../images/user.jpg'

function User() {
  const navigate = useNavigate();

  const userLogin = () => {
    navigate('/userlogin');
  }

  const userSignup = () => {
    navigate('/usersignup');
  }
  return (
    <div className="user-card">
        <img src={userimg} alt="coach-img"/>
        <button onClick={()=> userLogin()}>Login as a User</button>
        <button onClick={()=> userSignup()}>Join as a User</button>
    </div>
  )
}

export default User