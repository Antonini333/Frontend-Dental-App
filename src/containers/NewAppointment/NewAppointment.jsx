import React from 'react';
import './NewAppointment.scss';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {TimePicker,Input, Button, notification} from 'antd';
import moment from 'moment';

const format = 'HH:mm'





const NewAppointment = () =>{

    const history = useHistory();
    const token = localStorage.getItem('authToken')
    

    const handleSubmit = event =>{
        event.preventDefault(); // Prevent the page from refreshing.
        
        const NewAppointment={
            
            date: event.target.date.value.split("-").reverse().join("-"),
            symptoms: event.target.symptoms.value,
            hour: event.target.hour.value
        };
        const options = { headers: { Authorization: `${token}` }};
        axios.post('https://fast-stream-27176.herokuapp.com/api/Appointment', NewAppointment, options)
        .then(res => {

            localStorage.setItem('appointment',JSON.stringify(res.data))
            notification.success({ message :'You have made an appointment',description:`Date: ${NewAppointment.date} Hour: ${NewAppointment.hour}`})
            
            setTimeout(() => {
                history.push("/profile")
            }, 1900);
        }).catch(error => {
            notification.error({ message: 'Appointment error.', description: 'There was an error.' })
        })
    }

    return (
        
        <div className="appointment">
        <form className="appointment-form" onSubmit={handleSubmit}>

        <Input type="date" name="date" required placeholder="Set the date you desire the new appointment" />
        <Input type="symptoms" name="symptoms" required placeholder="Can you describe your symptoms?" />
        <TimePicker type="hour" name="hour" defaultValue={moment('12:00', format)} format={format} />




        <Button className="newButton" type="primary" htmlType="submit">Create new appointment</Button>
        </form>
    </div>
)
}

export default NewAppointment;




