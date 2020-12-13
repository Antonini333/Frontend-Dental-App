import React, {useEffect, useState} from 'react';
import './ShowAppointment.scss'
import axios from 'axios';

import {Button, notification} from 'antd'




const AppointmentController = () => {

    
    const [appointments,setAppointments] = useState([]);
    const token = localStorage.getItem('authToken')
    
   useEffect(() => {


     const options = { headers: { Authorization: `${token}` }};
         axios.get('https://fast-stream-27176.herokuapp.com/api/Appointment/show', options)
           .then((res) => {
               console.log(res.data)
               setAppointments(res.data);
               console.log(setAppointments)
               localStorage.setItem('appointments', JSON.stringify(res.data));
           })
    }, [])

    const deleteAppointment = async(id) => {
        const options = { headers: { Authorization: `${token}` }};
        await axios.delete('https://fast-stream-27176.herokuapp.com/api/Appointment/' + id, options);
         notification.success({message:'Appointment successfully cancelled.', description:'Please, contact us if you have any problem'})
        await axios.get('https://fast-stream-27176.herokuapp.com/api/Appointment/show', options)
        .then((res) => {
            console.log(res.data)
            setAppointments(res.data);
        }).catch((error) =>{
            console.log(error);
        })
       }


    const user = JSON.parse(localStorage.getItem('user'));
       

        return(
            <div className='appointmentprofile'>
        <div className="appointmentContainer">
            {appointments?.map(appointment =>
                <div key={appointment.id} className="cardAppointment">
                    
                  <div className='title'><strong>Patient Name:</strong> <em>{user.name}</em></div>
                  <div className='title'><strong>Age:</strong> <em>{user.age}</em></div>
                  <div className='title'><strong>Motive:</strong> <em>{appointment.symptoms}</em></div>
                  <div className='title'><strong>Day:</strong> <em>{appointment.date}</em></div>
                  <div className='title'><strong>Hour:</strong> <em>{appointment.hour}</em></div>
                  
                  
                  <Button className="buttonApp" onClick={() => {deleteAppointment(appointment.id)}}>Cancel  </Button>
                </div>
            )}
        </div>
      </div>
        )
}


export default AppointmentController;