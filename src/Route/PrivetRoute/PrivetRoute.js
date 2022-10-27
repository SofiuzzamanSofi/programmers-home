import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextAuth/AuthState';

const PrivetRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    let location = useLocation();




    if (loader) {
        return <div className="flex flex-col rounded shadow-md w-60 sm:w-80 animate-pulse min-h-screen min-w-full">
            <div className="h-48 rounded-t dark:bg-gray-700"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                <div>
                    Logign Access Denied, Pls Go to login page <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"><Link to='/signin'>Log In</Link></button>
                </div>
            </div>
        </div>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} ></Navigate>
    }
    return children;



};

export default PrivetRoute;