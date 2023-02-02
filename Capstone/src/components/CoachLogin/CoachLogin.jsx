import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './CoachLogin.css'
import coachimg from '../../images/coach.jpg'
import { loginCoach } from '../../actions'
import { connect } from 'react-redux'

function CoachLogin(props) {
  const navigate = useNavigate();
  const initialState = { cId:null, password:""};
  const [coachCredentials, setcoachCredentials] = useState(initialState); 
  const { cId, password } = coachCredentials;
  const [coachData, setCoachData] = useState({});
  const [ validCredentials, setvalidCredentials] = useState("");

  const coachLoginSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.get(`http://localhost:9090/coach-service/coach/${coachCredentials.cId}`).then((response)=>{
      setCoachData(response);
      validateCoach(response);
    }).catch((error)=>{
        setvalidCredentials("Invalid credentials");
    });
  }

  const validateCoach = (res) => {
    if (res.data.password === coachCredentials.password)
    {
      setvalidCredentials("");
      props.setLogged(true);
      props.dispatch(loginCoach(res.data))
      navigate('/coachhome')
    } else {
      setvalidCredentials("Invalid credentials");
    } 
  }

  const onChangeInput = (event) => {
    setcoachCredentials({...coachCredentials, [event.target.name] : event.target.value})
  }
  return (
    <div className="coach-login-container">
        <div className="coach-login-form">
            <h2>
                <img className="coach-login-img" src={coachimg} alt="coach-login-img"/>
                <span>Login as life coach</span>
            </h2>
            <form onSubmit={(event) => {coachLoginSubmitHandler(event)}}>
                <div className="elemnent-container">
                <div className="element">
                    <input 
                        placeholder="Coach id"
                        className="element-input"
                        type="number"
                        name="cId"
                        value={cId}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <input 
                        placeholder="Password"
                        className="element-input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>  
                </div>   
                <div className="element-btn-login">
                    <button>Login</button>
                </div>  
                <div className="error-msg">{ validCredentials }</div>
            </form> 
        </div>
    </div>
  )
}

export default connect()(CoachLogin)