import React, {useEffect, useState} from 'react';
import './ShowAppointment.scss'
import axios from 'axios';

import {Button, notification} from 'antd'




const AppointmentController = () => {

    
    const [appointments,setAppointments] = useState([]);
    const token = localStorage.getItem('authToken')
    

   useEffect(() => {
     let user = JSON.parse(localStorage.getItem('user'));

     const options = { headers: { Authorization: `${token}` }};
         axios.post(process.env.REACT_APP_BASE_URL +  '/api/Appointment/show', options)
           .then((res) => {
               console.log(res.data)
               setAppointments(res.data.appointment);
               console.log(setAppointments)
               localStorage.setItem('appointments', JSON.stringify(res.data));
           })
    }, [])

    const deleteAppointment = async(id) => {

        await axios.delete(process.env.REACT_APP_BASE_URL + '/api/Appointment/' + id);
         notification.success({message:'Appointment successfully cancelled.', description:'Please, contact us if you have any problem'})
        await axios.get(process.env.REACT_APP_BASE_URL + '/api/Appointment')
        .then((res) => {
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
                    
                  <div className='title'><strong>Patient Name:</strong> <em>{appointment.name_user}</em></div>
                  <div className='title'><strong>Motive:</strong> <em>{appointment.symptoms}</em></div>
                  <div className='title'><strong>Day:</strong> <em>{appointment.date}</em></div>
                  <div className='title'><strong>Hour:</strong> <em>{appointment.hour}</em></div>
                  
                  
                  <Button className="buttonApp" onClick={() => {deleteAppointment(appointment._id)}}>Cancel  </Button>
                </div>
            )}
        </div>
      </div>
        )
}


export default AppointmentController;