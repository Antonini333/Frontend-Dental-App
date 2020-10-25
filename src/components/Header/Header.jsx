import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import {useHistory} from "react-router"

const Header = ({user, setUser}) => {
    const history = useHistory();

const logout = () =>{
    
    localStorage.clear();
    
    setUser(null);
    history.push('/');
}
    return (
        <header className="header">
            <Link to="/">Home</Link>
            {user ?
            <div className='loggedIn'>
                <Link to='/profile'>{user.email}</Link>
                <span className='logout' onClick={logout}>Logout</span>
            </div> :
            <div className='notLoggedIn'>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/register">Register</Link>
            </div>}
        </header>
    )
}
export default Header;