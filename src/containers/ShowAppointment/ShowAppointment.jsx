import React from 'react';
import './ShowAppointment.scss'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {Button, notification} from 'antd'


const ShowAppointment = () =>{

    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault(); // Prevent the page from refreshing.
        const ShowAppointment={
            
            email: event.target.email.value,
            date: event.target.date.value
        };

        axios.get(`https://guarded-scrubland-93096.herokuapp.com/appointments/show/${ShowAppointment.email}`, ShowAppointment)
        .then(res => {
            localStorage.setItem('showedappointment',JSON.stringify(res.data))
            notification.success({ message: 'This is the register of your appointment' })
            
            setTimeout(() => {
                history.push("/")
            }, 3500);
        }).catch(error => {
            notification.error({ message: 'Appointment error.', description: 'There was an error.' })
        })
    }

    return (
        
        <div className="showappointment">
        <form className="showappointment-form" onSubmit={handleSubmit}>

        <input type="date" name="date" required placeholder="Date of the appointment you want to check" />
        <input type="email" name="email" required placeholder="Write your email" />




        <Button className="checkButton" type="primary" htmlType="submit">Check Appointment</Button>
        </form>
    </div>
)
}

export default ShowAppointment;