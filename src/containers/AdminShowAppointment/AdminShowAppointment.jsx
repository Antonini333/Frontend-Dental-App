import React, {useEffect, useState} from 'react';
import './AdminShowAppointment.scss'
import axios from 'axios';

import {Button, notification} from 'antd'




const AdminAppointmentController = () => {

    
    const [appointments,setAppointments] = useState([]);
    

   useEffect(() => {
     
         axios.get('https://fast-stream-27176.herokuapp.com/api/Appointment') // AQUÍ LLAMAR A TODAS LAS CITAS
           .then((res) => {
               console.log(res.data)
               setAppointments(res.data.appointment);
               console.log(setAppointments)
               localStorage.setItem('appointments', JSON.stringify(res.data));
           })
    }, [])

    const deleteAppointment = async(id) => {

       await axios.delete('https://fast-stream-27176.herokuapp.com/api/Appointment/' + id);
        notification.success({message:'Appointment successfully cancelled.', description:'Please, contact us if you have any problem'})
       await axios.get('https://fast-stream-27176.herokuapp.com/api/Appointment')
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


export default AdminAppointmentController;