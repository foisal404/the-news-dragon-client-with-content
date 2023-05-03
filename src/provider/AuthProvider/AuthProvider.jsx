import React, { createContext} from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const authContext= createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null)

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const authInfo={
        user,
        signUp,
        signIn

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;