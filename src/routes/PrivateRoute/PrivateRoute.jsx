import React, { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(authContext)
    const location=useLocation();
    console.log(location)
    if(loader){
        return <Spinner animation="grow" />
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;