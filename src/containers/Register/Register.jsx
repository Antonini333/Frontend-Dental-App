import React from 'react';
import {useHistory} from "react-router";
import {Input, Button, notification } from 'antd';

import axios from 'axios';
import './Register.scss'

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
            DNI: event.target.DNI.value,
            role: event.target.role.value,
            
        };
        
        axios.post('https://fast-stream-27176.herokuapp.com/api/register', userBody) // CHECKED
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
            
            setTimeout(() => {
                history.push("/login")
            }, 1500);
        }).catch(error => {
            notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
        })
    }

    return (
        <div className="mainregister">
        <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>

        <Input type="name" name="name" required placeholder="Write your name" />
        <Input type="phone" name="phone" required placeholder="Write your phone" />
        <Input type="email" name="email" required placeholder="Write your email" />
        <Input type="password" name="password" required placeholder="Write your password" />
        <Input type="age" name="age" required placeholder="Write your age" />
        <Input type="address" name="address" required placeholder="Write your address" />
        <Input type="nationality" name="nationality" required placeholder="Write your nationality" />
        <Input type="DNI" name="DNI" required placeholder="Write your DNI" />
        <select type="role" className="role" name="role" required placeholder="Choose your role"><option value='admin'>Admin</option><option value='user'>User/Client</option></select>
       
        
        



        
        <Button type="primary" className="buttonsignup" htmlType="submit" size="large">Sign up</Button>
         <div></div>
    </form>
    </div>
    </div>
)
}

export default Register;

