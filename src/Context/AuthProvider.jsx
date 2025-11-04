import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // new user
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth,email,password)
    }

    // sign in
    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=> {
            unsubscribe()
        }
    },[])


    const authInfo ={
            user,
            loading,
            createUser,
            signInUser,
    }
    return( <AuthContext value={authInfo}>
        {children}
    </AuthContext>)
};

export default AuthProvider;