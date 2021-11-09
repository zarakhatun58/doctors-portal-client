import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


export const AuthContexts =createContext(null);

const AuthProvider = ({children}) => {

const allContext=useFirebase();
    return (
        <div>
        <AuthContexts.Provider value={allContext}   >
                 {children}
        </AuthContexts.Provider> 
        </div>
    );
};

export default AuthProvider;