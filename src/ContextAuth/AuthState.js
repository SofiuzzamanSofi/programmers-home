import React, { createContext, useState } from 'react';


export const AuthContext = createContext("");




const AuthState = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);






    const authInfo = { user, setUser, loader, setLoader }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;