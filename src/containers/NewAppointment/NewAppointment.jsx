import React from 'react';
import './NewAppointment.scss';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {TimePicker,Input, Button, notification} from 'antd';
import moment from 'moment';

const format = 'HH:mm'





const NewAppointment = () =>{

    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    

    const handleSubmit = event =>{
        event.preventDefault(); // Prevent the page from refreshing.
        
        const NewAppointment={
            
            token: user.token,
            date: event.target.date.value.split("-").reverse().join("-"),
            symptoms: event.target.symptoms.value,
            hour: event.target.hour.value
        };

        axios.post(`https://guarded-scrubland-93096.herokuapp.com/appointments/create/${NewAppointment.token}`, NewAppointment)
        .then(res => {

            localStorage.setItem('appointment',JSON.stringify(res.data))
            notification.success({ message :'You have made an appointment',description:`Date: ${NewAppointment.date}`})
            
            setTimeout(() => {
                history.push("/profile")
            }, 3000);
        }).catch(error => {
            notification.error({ message: 'Appointment error.', description: 'There was an error.' })
        })
    }

    return (
        
        <div className="appointment">
        <form className="appointment-form" onSubmit={handleSubmit}>

        <Input type="date" name="date" required placeholder="Set the date you desire the new appointment" />
        <Input type="symptoms" name="symptoms" required placeholder="Can you describe your symptoms?" />
        <TimePicker type="hour" name="hour" defaultValue={moment('12:08', format)} format={format} />




        <Button className="newButton" type="primary" htmlType="submit">Create new appointment</Button>
        </form>
    </div>
)
}

export default NewAppointment;




