import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux';
import axios from 'axios';
import './UserAppointment.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function UserAppointment(props) {
  const [appointments, setappointments] = useState(null);
  const navigate = useNavigate();

  const handleCancelAppointment = async (event, appointment) => {
    
    event.preventDefault();
    await axios.delete(`http://localhost:9090/appointment-service/coach/${appointment.id}`).then((response)=> {
      getAllAppointments();
    }).catch((error) => {

    })
  }
  
  const handleReschedule = (appointment) => {
    props.setTypeAppt(false);
    props.setCoachId(appointment.coachId)
    navigate('/bookAppointment')
  }

  const getAllAppointments = async () => {
    await axios.get(`http://localhost:9090/appointment-service/coach/${props.user.id}`).then((response)=> {
      setappointments(response.data);
    }).catch((error) => {

    })
  }
  useEffect(() => {
    getAllAppointments();
  }, [])
  
  if (appointments?.length > 0) {
      return (
        <div className="appointment-container">
          <div className="user-appointment-card">
          {
            appointments?.map((appointment) => {
              return (
                  <div className="user-appointment-single-card">
                  <div>
                    <div className="appointment-item-date">
                      <div>Appointment date: {appointment.date}</div>
                      <div>Slot: {appointment.slot}</div>
                    </div>
                    <div className="appointment-item-id">
                      <div >Booking id: {appointment.id}</div>
                      <div>User id: {appointment.userId}</div>
                      <div>Coach id: {appointment.coachId}</div>
                    </div>
                  </div> 
                  <div className="btn-reschedule">
                      <button onClick={()=>handleReschedule(appointment)}>Reschedule appointment</button>
                  </div>  
                  <div className="btn-confirm">
                    <Popup trigger={<button>Cancel appointment</button>} modal nested>
                      {
                        close => (
                          <div className='modal popup-container'>
                            <div className='content popup-contents'>Are you sure you want to cancel the appoinment</div>
                            <div className="popup-btn-container">
                              <button className="btn-yes" onClick={(event)=> { close(); handleCancelAppointment(event,appointment)}}>Yes</button>
                              <button className="btn-no" onClick={()=>close()}>No</button>
                            </div>
                          </div>
                        )
                      }
                    </Popup>
                  </div>  
                  </div>
              )
            })
          }
          </div> 
        </div>
      )
    } else {
      return (
        <div className="appointment-container appointment-empty no-appointment">
          <div className="user-appointment-card">
            <h3 className="user-booking-h3">No scheduled appointments</h3>
          </div>
        </div>
      )
    }
} 

const mapStateToProps = (state) => {
  return {
    user: state.loginUserReducer
  }
}
export default connect(mapStateToProps)(UserAppointment)
