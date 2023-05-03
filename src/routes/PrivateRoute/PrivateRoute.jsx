import React, { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(authContext)
    const location=useLocation();
    console.log(location)
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;