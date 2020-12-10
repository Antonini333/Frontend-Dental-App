import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import './Login.scss';
import {Input, Button, notification} from 'antd'

// const Login = (props) => {
    const Login = ({setUser}) => {
    const history = useHistory();
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const user ={

            email:event.target.email.value,
            password:event.target.password.value
        };
        axios.post('https://guarded-scrubland-93096.herokuapp.com/users/login',user)
        .then(res=>{
            console.log(res.data);
         // props.setUser(res.data.user) //seteo el user como estado del App.js
            setUser(res.data) //seteo el user como estado del App.js
            localStorage.setItem('authToken',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data))

        if (res.data.role === 'admin') {
            setTimeout(() => {
                history.push("/adminprofile")
            }, 1500);
    }else{ setTimeout(() => {
            history.push("/profile")
        }, 1500)};
            notification.success({message:'Welcome back ' +res.data.name,description:'It is nice to see you again'});
            console.log('user')
            
        })
        .catch(error=>console.log(error))

    }
    return (
        <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>

            <Input type="email" name="email" required placeholder="Introduce tu email" />
            <Input type="password" name="password" required placeholder="Introduce tu contraseña"/>

            <Button className="buttonlogin" type="primary" htmlType="submit">Login</Button>
        </form>
        </div>
    )
}

export default Login
