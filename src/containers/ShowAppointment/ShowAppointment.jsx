import React, {useEffect, useState} from 'react';
import './ShowAppointment.scss'
import axios from 'axios';

import {notification} from 'antd'




const AppointmentController = () => {

    
    const [appointments,setAppointments] = useState([]);
    

   useEffect(() => {
     let user = JSON.parse(localStorage.getItem('user'));
         axios.post(`https://guarded-scrubland-93096.herokuapp.com/appointments/show/${user.email}`, user.email)
           .then((res) => {
               console.log(res.data)
               setAppointments(res.data.appointment);
               console.log(setAppointments)
               localStorage.setItem('appointments', JSON.stringify(res.data));
           })
    }, [])

    const deleteAppointment = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        axios.delete(`https://guarded-scrubland-93096.herokuapp.com/appointments/cancel/${user.email}`, user.email);
        notification.success({message:'Appointment has been successfully cancelled.', description:'Appointment has been successfully cancelled.'})
        axios.post(`https://guarded-scrubland-93096.herokuapp.com/appotments/show/${user.email}`, user.email)
        .then((res) =>{
          console.log(res.data)
          setAppointments(res.data.appointment);
        }).catch((error) =>{
          console.log(error);
        })
      }


        return(
            <div className='appointmentprofile'>
        <div className="appointmentContainer">
            {appointments?.map(appointment =>
                <div key={appointment._id} className="cardAppointment">
                  <div className='title'>Patient: {appointment.name_user}</div>
                  <div className='title'>Motive: {appointment.symptoms}</div>
                  <div>{appointment.date}</div>
                  <button onClick={()=> {deleteAppointment(appointment._id)}}>X</button>
                </div>
            )}
        </div>
      </div>
        )
}

export default AppointmentController;