import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext("");
const auth = getAuth(app);




const AuthState = ({ children }) => {

    let [user, setUser] = useState(null);
    let [loader, setLoader] = useState(true);
    let [error, setErro] = useState("");
    console.log(user);


    const createNewUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updatePro = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    }

    const emailVeryfy = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const signInLogIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const signInPopUp = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }



    const signOutLogOut = () => {
        setLoader(true);
        return signOut(auth);
    }




    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            // const photoURL = currentUser?.photoURL;
            // if (!photoURL) {
            //     currentUser.photoURL = "https://image.shutterstock.com/image-vector/photo-coming-soon-missing-image-260nw-2146264143.jpg";
            // }
            setUser(currentUser);
            setLoader(false);
        });
        return () => unSubsCribe();
    }, [])



    const authInfo = { user, setUser, loader, setLoader, error, setErro, createNewUser, signInLogIn, signInPopUp, signOutLogOut, updatePro, emailVeryfy }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;