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
               <Link to="/profile/newAppointment">Nueva cita</Link>
             </div>
             <div className="buttonsProfile">
               <Link to="/profile/showAppointments">Mostrar citas</Link>
             </div>
       </div>
     </div>
    )
}

export default Profile;