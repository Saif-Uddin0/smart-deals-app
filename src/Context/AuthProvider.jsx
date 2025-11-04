import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider()

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


    // sign with google
    const signWithGoogle =()=>{
        setLoading(true);
       return signInWithPopup(auth,googleProvider)
    }

    // signOut
    const SignOut =()=>{
        setLoading(true);
        return signOut(auth)
    }


    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
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
            signWithGoogle,
            SignOut,
    }


    return( <AuthContext value={authInfo}>
        {children}
    </AuthContext>)
};

export default AuthProvider;