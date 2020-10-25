import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  
    return (
        <div className="home">
            <div className="bettens">
            < Link to="/register">REGISTER</Link>
            </div>
            <div className="bettens">
            <Link to="/login">LOGIN</Link>
            </div>
        </div>
    )
   
    
}


export default Home;
