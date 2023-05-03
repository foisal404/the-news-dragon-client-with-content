import React, { createContext} from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const authContext= createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null)
    const [loader,setloader]=useState(true)

    const signUp=(email,password)=>{
        setloader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        return signOut(auth)
    }
    //state change observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser);
            setUser(currentUser)
            setloader(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loader,
        signUp,
        signIn,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;