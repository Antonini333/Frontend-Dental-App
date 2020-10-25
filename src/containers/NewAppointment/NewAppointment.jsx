import React from 'react';
import './NewAppointment.scss'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {Input, Button, notification} from 'antd'


const NewAppointment = () =>{

    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault(); // Prevent the page from refreshing.
        const NewAppointment={
            
            email: event.target.email.value,
            date: event.target.date.value,
            symptoms: event.target.symptoms.value
        };

        axios.post(`https://guarded-scrubland-93096.herokuapp.com/appointments/create/${NewAppointment.email}`, NewAppointment)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Appointment succeed',description:'Succesfully.'})
            
            setTimeout(() => {
                history.push("/")
            }, 3500);
        }).catch(error => {
            notification.error({ message: 'Appointment error.', description: 'There was an error.' })
        })
    }

    return (
        
        <div className="appointment">
        <form className="appointment-form" onSubmit={handleSubmit}>

        <Input type="date" name="date" required placeholder="Set the date you desire the new appointment" />
        <Input type="symptoms" name="symptoms" required placeholder="Can you describe your symptoms?" />
        <Input type="email" name="email" required placeholder="Write your email" />




        <Button type="primary" htmlType="submit">Create new appointment</Button>
        </form>
    </div>
)
}

export default NewAppointment;