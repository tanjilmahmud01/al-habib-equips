import React, { useContext } from 'react';
import { login_context } from '../../context/login_context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(login_context);
    console.log('coming from Private route. User:', user, "Loading: ", loading);
    const location = useLocation();

    // if(loading){
    //     return <h2>loading...</h2>
    // }

    if(user){
        return children;
    }

    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;