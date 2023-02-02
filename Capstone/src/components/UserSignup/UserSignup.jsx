import React, { useState } from 'react'
import './UserSignup.css'
import axios from 'axios';
import userimg from '../../images/user.jpg'
import { initUser } from '../../data/user';
import { useNavigate } from 'react-router'

export default function UserSignup() {
    const [homePage, setHomePage] = useState(true);
    const initialState = initUser;
    const [user, setUser] = useState(initialState);
    const [response,setResponse] = useState({});
    const navigate = useNavigate();

    const {
        id,
        name,
        password,
        mobile,
        email,
        dob,
        gender,
        pincode,
        city,
        state,
        country
     } = user;

    const userSignupSubmitHandler = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://localhost:9090/user-service/user", user);
        setResponse(res)
        setHomePage(false);
    }

    const userLogin = () => {
        navigate('/userLogin')
    }

    const onChangeInput = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
    }

    if (homePage) {
        return (
          <div className="user-signup-container">
              <div className="user-signup-form">
                  <h2>
                      <img className="user-signup-img" src={userimg} alt="user-signup-img"/>
                      <span>User profile</span>
                  </h2>
                  <form onSubmit={(event) => {userSignupSubmitHandler(event)}}>
                      
                      <div className="user-element">
                          <label className="user-element-label">Name</label>
                          <input 
                              className="user-element-input"
                              type="text"
                              minLength="3"
                              maxLength="50"
                              name="name"
                              value={name}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">Password</label>
                          <input 
                              className="user-element-input"
                              type="password"
                              minLength="5"
                              maxLength="10"
                              name="password"
                              value={password}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">Mobile number</label>
                          <input 
                              className="user-element-input"
                              type="number"
                              name="mobile"
                              value={mobile}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">Email</label>
                          <input 
                              className="user-element-input"
                              type="text"
                              name="email"
                              value={email}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">Date of birth</label>
                          <input 
                              className="user-element-input"
                              type="calender"
                              /* minLength="20"
                              maxLength="100" */
                              name="dob"
                              value={dob}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">Gender</label>
                          <div className="user-element-radio">
                              <input type="radio" name="gender" value="Male"/>
                              <label >Male</label>
                              <input type="radio" name="gender" value="Female"/>
                              <label >Female</label>
                          </div>
                      </div> 
                     
                      <div className="user-element">
                          <label className="user-element-label">Pincode</label>
                          <input 
                              className="user-element-input"
                              type="number"
                              minLength="3"
                              maxLength="50"
                              name="pincode"
                              value={pincode}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>  
                      <div className="user-element">
                          <label className="user-element-label">City</label>
                          <input 
                              className="user-element-input"
                              type="text"
                              name="city"
                              value={city}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">State</label>
                          <input 
                              className="user-element-input"
                              type="text"
                              name="state"
                              value={state}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>
                      <div className="user-element">
                          <label className="user-element-label">Country</label>
                          <input 
                              className="user-element-input"
                              type="text"
                              name="country"
                              value={country}
                              onChange={(event)=>{onChangeInput(event)}}
                          />
                      </div>  
                      <div className="user-element-btn">
                          <button>Register</button>
                      </div>  
                  </form>
              </div>
          </div>
        )
        } else {
            return (
                <div className="user-signup-container user-success-container">
                    <img className="user-signup-img" src={userimg} alt="user-signup-img"/>
                    <h2>Account created successfully !!</h2>
                    <h4>Your user id is {response?.data.id}</h4>
                    <button className="user-login-btn" onClick={() => { userLogin()}}>Login now</button>
                </div>
            )
        }
}
