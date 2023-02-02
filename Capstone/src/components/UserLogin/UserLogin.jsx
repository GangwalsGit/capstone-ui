import React, { useState } from 'react'
import { useNavigate }from 'react-router'
import axios from 'axios'
import './UserLogin.css'
import userimg from '../../images/user.jpg'
import { loginUser } from '../../actions'
import { connect } from 'react-redux'

function UserLogin(props) {
  const navigate = useNavigate();
  const initialState = { uId:null, password:""};
  const [userCredentials, setUserCredentials] = useState(initialState); 
  const { uId, password } = userCredentials;
  const [userData, setUserData] = useState({});
  const [ validCredentials, setvalidCredentials] = useState("");

  const userLoginSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.get(`http://localhost:9090/user-service/user/${userCredentials.uId}`).then((response)=>{
      setUserData(response);
      validateUser(response);
    }).catch((error)=>{
        setvalidCredentials("Invalid credentials");
    });
  }

  const validateUser = (res) => {
    if (res.data.password === userCredentials.password)
    {
      setvalidCredentials("");
      props.setLogged(true);
      props.dispatch(loginUser(res.data))
      navigate('/userhome')
    } else {
      setvalidCredentials("Invalid credentials");
    } 
    
  }

  const onChangeInput = (event) => {
    setUserCredentials({...userCredentials, [event.target.name] : event.target.value})
  }
  return (
    <div className="user-login-container">
        <div className="user-login-form">
            <h2>
                <img className="user-login-img" src={userimg} alt="user-login-img"/>
                <span>Login as user</span>
            </h2>
            <form onSubmit={(event) => {userLoginSubmitHandler(event)}}>
                <div className="elemnent-container">
                <div className="element">
                    <input 
                        placeholder="User id"
                        className="element-input"
                        type="number"
                        name="uId"
                        value={uId}
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

export default connect()(UserLogin)