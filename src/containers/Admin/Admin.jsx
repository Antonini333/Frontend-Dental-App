import React, {useEffect, useState} from 'react';
import './Admin.scss'
import axios from 'axios';

import {Button, notification} from 'antd'




const AdminController = () => {

    
    const [appointments,setAppointments] = useState([]);
    

   useEffect(() => {
  // let user = JSON.parse(localStorage.getItem('user'));
         axios.post('https://guarded-scrubland-93096.herokuapp.com/appointments/show/')
           .then((res) => {
               console.log(res.data)
               setAppointments(res.data.appointment);
               console.log(setAppointments)
               localStorage.setItem('appointments', JSON.stringify(res.data));
           })
    }, [])

    const deleteAppointment = async(_id) => {

       await axios.delete('https://guarded-scrubland-93096.herokuapp.com/appointments/cancel/' + _id);
        notification.success({message:'Appointment successfully cancelled.', description:'Please, contact us if you have any problem'})
       .then((res) => {
           console.log(res.data)
           setAppointments(res.data.appointment);
       }).catch((error) =>{
           console.log(error);
       })
      }


        return(
            <div className='adminprofile'>
        <div className="appContainer">
            {appointments?.map(appointment =>
                <div key={appointment._id} className="cardApp">
                    
                  <div className='title'><strong>Patient:</strong> <em>{appointment.name_user}</em></div>
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


export default AdminController;