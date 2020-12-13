import React, {useEffect, useState} from 'react';
import './AdminShowUsers.scss'
import axios from 'axios';





const AdminUserController = () => {


    
    const [users,setUsers] = useState([]);

   useEffect(() => {
     
         axios.get('https://fast-stream-27176.herokuapp.com/api/users') 
           .then((res) => {
               console.log(res.data)
               setUsers(res.data);
               console.log(setUsers)
               localStorage.setItem('users', JSON.stringify(res.data));
           })
    }, [])




        return(
            <div className='appointmentprofile'>
        <div className="appointmentContainer">
            {users?.map(user =>
                <div key={user.id} className="cardAppointment">
                    
                  <div className='title'><strong>Patient:</strong> <em>{user.name}</em></div>
                  <div className='title'><strong>Age:</strong> <em>{user.age}</em></div>
                  <div className='title'><strong>Phone number::</strong> <em>{user.phone}</em></div>
                  <div className='title'><strong>Address:</strong> <em>{user.address}</em></div>
                  <div className='title'><strong>DNI:</strong> <em>{user.DNI}</em></div>
                  
                  
                </div>
            )}
        </div>
      </div>
        )
}





export default AdminUserController;