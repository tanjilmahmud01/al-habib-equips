import React, { useContext } from 'react';
import { login_context } from '../../context/login_context';

const AdminDashboard = () => {
    const {user, setUser} = useContext(login_context);
    console.log('coming from Admin Dashboard', user); 

    const handleLogOut = () => {
        setUser(null);
    }

    return (
        <div>
            <h2>this is admin dashboard</h2>
            <button onClick={handleLogOut}>logout</button>
        </div>
    );
};

export default AdminDashboard;