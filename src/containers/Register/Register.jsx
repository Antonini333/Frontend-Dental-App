import React from 'react';
import {useHistory} from "react-router";

import {Input, Button, notification } from 'antd';
import axios from 'axios';

const Register = () =>{

    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault(); // Prevent the page from refreshing.
        const userBody={
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            password: event.target.password.value,
            age: event.target.age.value,
            address: event.target.address.value,
            nationality: event.target.nationality.value,
            DNI: event.target.DNI.value
        };

        axios.post('http://localhost:3001/users/register', userBody)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
            
            setTimeout(() => {
                history.push("/")
            }, 1500);
        }).catch(error => {
            notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
        })
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>

        <Input type="name" name="name" required placeholder="Write your name" />
        <Input type="phone" name="phone" required placeholder="Write your phone" />
        <Input type="email" name="email" required placeholder="Write your email" />
        <Input type="password" name="password" required placeholder="Write your password" />
        <Input type="age" name="age" required placeholder="Write your age" />
        <Input type="address" name="address" required placeholder="Write your address" />
        <Input type="nationality" name="nationality" required placeholder="Write your nationality" />
        <Input type="DNI" name="DNI" required placeholder="Write your DNI" />




        <Button type="primary" htmlType="submit">Sign up</Button>

    </form>
)
}

export default Register;