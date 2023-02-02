import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import './CoachHome.css'
import axios from 'axios';

function CoachHome(props) {
  const [appointments, setappointments] = useState(null);

  const getAllAppointments = async () => {
    await axios.get(`http://localhost:9090/appointment-service/getcoach/${props.user.id}`).then((response)=> {
      setappointments(response.data);
    }).catch((error) => {

    })
  }
  useEffect(() => {
    getAllAppointments();
  }, [])

  if (appointments?.length > 0) {
    return (
      <div className="coach-home-container">
        <div className="coach-home-card-container">
        {
          appointments.map((appointment)=> {
            return (
              <div className="appointment-card">
                  <div className="card-item">Appointment Date: {appointment.date}</div>
                  <div className="card-item">Slot: {appointment.slot}</div>
                  <div className="card-font-small">Booking id: {appointment.id}</div>
                  <div className="card-font-small">User id: {appointment.userId}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
    } else {
      return (
        <div className="coach-home-container">
          <div className="coach-home-card-container no-schedules">
            <h2>
              No planned schedules yet
            </h2>
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginCoachReducer
  }
}

export default connect(mapStateToProps)(CoachHome);