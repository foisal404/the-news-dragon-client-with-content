import React, { createContext} from 'react';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const authContext= createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    
    const authInfo={
        signUp,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;