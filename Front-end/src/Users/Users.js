import React, { useEffect, useState } from 'react';
import './Users.css';

function Users() {
    const [users,setUsers] = useState([])
    useEffect(() => {
    const fetchData = async () => {
    try {
    const response = await fetch('http://localhost:3005/Users/findAll');
    const jsonData = await response.json();
    setUsers(jsonData)
    } catch (error) {
    console.log('Error al obtener los datos:', error);
    }
    };
    
    fetchData();
    }, [])

    return (
        <React.Fragment>
            <div className="footer">
                 {JSON.stringify(users)}   
            </div>
        </React.Fragment>
    )
}

export default Users;