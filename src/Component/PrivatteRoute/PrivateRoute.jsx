import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ childern }) => {
    
    const { user } = use(AuthContext)
    
    if(user){
        return childern
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;