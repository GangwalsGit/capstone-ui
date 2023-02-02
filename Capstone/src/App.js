import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SharedLayout from './components/Shared/SharedLayout';
import CoachLogin from './components/CoachLogin/CoachLogin';
import CoachSignup from './components/CoachSignup/CoachSignup';
import UserSignup from './components/UserSignup/UserSignup';
import UserLogin from './components/UserLogin/UserLogin';
import CoachHome from './components/CoachHome/CoachHome';
import { useState } from 'react';
import CoachProfile from './components/CoachProfile/CoachProfile';
import UserHome from './components/UserHome/UserHome';
import USerProfile from './components/UserProfile/USerProfile';
import UserAppointment from './components/UserAppointment/UserAppointment';
import UserBookAppointment from './components/UserBookAppointment/UserBookAppointment';

function App() {
  const [coachLoggedIn, setCoachLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [coachId, setCoachId] = useState(null);
  const [typeAppt, setTypeAppt] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout cloggedIn={coachLoggedIn} uloggedIn={userLoggedIn}/>}>
            <Route path="/home" index element={<Home/>}/>
            <Route path="/coachsignup" index element={<CoachSignup/>}/>
            <Route path="/coachlogin" index element={<CoachLogin setLogged={setCoachLoggedIn}/>}/> 
            <Route path="/coachhome" index element={<CoachHome/>}/>
            <Route path="/coachschedules" index element={<CoachHome/>}/>
            <Route path="/coachprofile" index element={<CoachProfile/>}/>
            <Route path="/usersignup" index element={<UserSignup/>}/>
            <Route path="/userlogin" index element={<UserLogin setLogged={setUserLoggedIn}/>}/>
            <Route path="/userhome" index element={<UserHome setTypeAppt={setTypeAppt} setCoachId={setCoachId}/>}/>  
            <Route path="/userprofile" index element={<USerProfile/>}/>   
            <Route path="/userappointments" index element={<UserAppointment setCoachId={setCoachId} setTypeAppt={setTypeAppt}/>}/>  
            <Route path="/bookAppointment" element={<UserBookAppointment typeAppt={typeAppt} coachId={coachId}/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
