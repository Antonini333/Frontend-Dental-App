import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import Register from './containers/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path ='/register' component={Register}/>
       </Switch>
       <Footer />
       </BrowserRouter>
          
  );
}

export default App;
