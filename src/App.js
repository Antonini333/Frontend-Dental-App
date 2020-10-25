import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';

import Header from './components/Header/Header';

import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Home from './containers/Home/Home';
import NewAppointment from './containers/NewAppointment/NewAppointment';
import ShowAppointment from './containers/ShowAppointment/ShowAppointment';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    axios.get('https://guarded-scrubland-93096.herokuapp.com/users',
      {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        setUser(res.data)
      })
  }, [])
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/register' component={Register}/>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/profile/newappointment' component={NewAppointment} />
        <Route exact path='/profile/showappointment' component={ShowAppointment} />
        <Route exact path='/login' >

          <Login setUser={setUser} />

          </Route>
       </Switch>
       
       </BrowserRouter>
          
  );
}

export default App;
