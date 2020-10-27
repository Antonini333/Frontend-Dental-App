import React from 'react'
import {Link} from 'react-router-dom'
import './Profile.scss'

const Profile = () => {
    const userLogin = JSON.parse(localStorage.getItem('user'));
    return (
       console.log(userLogin),

       <div className="body">


       <div className="containerButtons">
             <div className="buttonsProfile">
               <Link to="/profile/newappointment">Make New Appointment</Link>
             </div>
             <div className="buttonsProfile">
               <Link to="/profile/showappointment">Check Appointment by date</Link>
             </div>
             <div className="buttonsProfile">
               <Link to="/profile/showappointment">Check All Appointments</Link>
             </div>
             <div className="buttonsProfile">
               <Link to="/">Home</Link>
             </div>
       </div>
     </div>
    )
}

export default Profile;



