import React, {useEffect, useState} from 'react';
import './AdminShowUsers.scss'
import axios from 'axios';

import {Button, notification} from 'antd'




const AdminUserController = () => {

    
    const [users,setUsers] = useState([]);
    

   useEffect(() => {
     
    axios.get(process.env.REACT_APP_BASE_URL + '/api/users')
           .then((res) => {
               console.log(res.data)
               setUsers(res.data.users);
               console.log(setUsers)
           })
    }, [])

        return(
            <div className='appointmentprofile'>
        <div className="appointmentContainer">
            {users?.map(user =>
                <div key={user.id} className="cardAppointment">
                    
                  <div className='title'><strong>Patient Name:</strong> <em>{user.name}</em></div>
                  <div className='title'><strong>Age:</strong> <em>{user.age}</em></div>
                  <div className='title'><strong>Phone:</strong> <em>{user.phone}</em></div>
                  <div className='title'><strong>Address:</strong> <em>{user.address}</em></div>
                  <div className='title'><strong>DNI:</strong> <em>{user.DNI}</em></div>
                  <div className='title'><strong>Nationality:</strong> <em>{user.nationality}</em></div>
                  
                  
                </div>
            )}
        </div>
      </div>
        )
}


export default AdminUserController;