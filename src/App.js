import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter/*, Route*/ } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
       </Switch>
       <Footer />
       </BrowserRouter>
          
  );
}

export default App;
