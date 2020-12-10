import React from 'react'
import {Link} from 'react-router-dom'
import './AdminProfile.scss'

const AdminProfile = () => {
    const userLogin = JSON.parse(localStorage.getItem('user'));
    
    return (
       console.log(userLogin),

       <div className="body">


       <div className="containerButtons">
             <div className="buttonsProfile">
               <Link to="/adminprofile/showusers">Check All Users</Link>
             </div>
             <div className="buttonsProfile">
               <Link to="/adminprofile/showappointment">Check All Appointments</Link>
             </div>
             
             <div className="buttonsProfile">
               <Link to="/">Home</Link>
             </div>
       </div>
     </div>
    )
}

export default AdminProfile;