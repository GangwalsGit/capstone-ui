import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CoachSignup.css'
import coachimg from '../../images/coach.jpg'
import { useNavigate } from 'react-router'

export default function CoachSignup() {
  const navigate = useNavigate();
  const initialState = { name:"", password:"", dob:"", gender:"", mobile:0, speciality:"" }; 
  const [coach, setCoach] = useState(initialState);  
  const { name, password, dob, gender, mobile, speciality } = coach;  
  const [homePage,setHomePage] = useState(true)
  const [response,setResponse] = useState(null)

  const onChangeInput = (event) => {
    setCoach({...coach, [event.target.name] : event.target.value})
  }
  const coachSignupSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:9090/coach-service/coach", coach);
    setResponse(res)
    setHomePage(false);
  }  

  const coachLogin = () => {
    navigate('/coachlogin');
  }
  
  if (homePage) {
  return (
    <div className="coach-signup-container">
        <div className="coach-signup-form">
            <h2>
                <img className="coach-signup-img" src={coachimg} alt="coach-signup-img"/>
                <span>Life coach profile</span>
            </h2>
            <form onSubmit={(event) => {coachSignupSubmitHandler(event)}}>
                
                <div className="element">
                    <label className="element-label">Name</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="name"
                        value={name}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Password</label>
                    <input 
                        className="element-input"
                        type="password"
                        minLength="5"
                        maxLength="10"
                        name="password"
                        value={password}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Date of birth</label>
                    <input 
                        className="element-input"
                        type="calender"
                        /* minLength="20"
                        maxLength="100" */
                        name="dob"
                        value={dob}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Gender</label>
                    <div className="element-radio">
                        <input type="radio" name="gender" value="Male"/>
                        <label >Male</label>
                        <input type="radio" name="gender" value="Female"/>
                        <label >Female</label>
                    </div>
                </div> 
                <div className="element">
                    <label className="element-label">Mobile number</label>
                    <input 
                        className="element-input"
                        type="number"
                        name="mobile"
                        value={mobile}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Speciality</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="speciality"
                        value={speciality}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>      
                <div className="element-btn">
                    <button>Register</button>
                </div>  
            </form>
        </div>
    </div>
  )
  } else {
      return (
          <div className="coach-signup-container sign-up-success-container">
              <img className="coach-signup-img" src={coachimg} alt="coach-signup-img"/>
              <h2>You are a coach now !!</h2>
              <h4>Your coach id is {response?.data.id}</h4>
              <button className="login-btn" onClick={() => { coachLogin()}}>Login now</button>
          </div>
      )
  }
}
