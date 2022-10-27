import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextAuth/AuthState';

const PrivetRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation();




    if (loader) {
        return <div className="flex flex-col rounded shadow-md w-60 sm:w-80 animate-pulse min-h-screen min-w-full">
            <div className="h-48 rounded-t dark:bg-gray-700"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
            </div>
        </div>
    }
    if (user?.uid) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} ></Navigate>


};

export default PrivetRoute;