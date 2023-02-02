import React from 'react'
import './UserProfile.css'
import { connect } from 'react-redux'
import userimg from '../../images/user.jpg'

function USerProfile(props) {
  const data = props?.user;
  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="user-card-item">
          <div>
            <img className="user-card-img" src={userimg} alt="user-login-img"/>
          </div>
          <div className="user-card-item-details">
              <div className="user-profilecard-item">{data.name}</div>
              <div className="user-profilecard-font-small">Date of birth : { data.dob}</div>
              <div className="user-profilecard-font-small">Email id : {data.email}</div>
              <div className="user-profilecard-font-small">Mobile number : {data.mobile}</div>
              <div className="user-profilecard-font-small">Address : {data.city} {data.state}, {data.country}</div>
              <div className="user-profilecard-font-small">Pincode : {data.pincode}</div>
          </div>
        </div>
        <div> 
          <button className="btn-back">Go back</button>
        </div>
      </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user : state.loginUserReducer
  }
}

export default connect(mapStateToProps)(USerProfile)
