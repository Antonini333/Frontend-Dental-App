import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        axios.get('https://guarded-scrubland-93096.herokuapp.com/users',{
            headers:{
                Authorization:token
            }
        }).then(res=>setUsers(res.data));
    }, [])
    
    return (
        <div className="user-list">
            {users.map(user=><div className="user" key={user._id}>
               <span>Nombre : {user.name}</span> 
               <span>Email : {user.email}</span>
            </div>)}
        </div>
    )
}

export default Users