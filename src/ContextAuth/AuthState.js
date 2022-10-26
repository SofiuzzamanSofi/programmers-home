import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext("");
const auth = getAuth(app);




const AuthState = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setErro] = useState("");
    console.log(user);


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const updatePro = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const emailVeryfy = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const signInLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    const signInPopUp = (provider) => {
        return signInWithPopup(auth, provider)
    }



    const signOutLogOut = () => {
        return signOut(auth);
    }




    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = currentUser.uid;
                // ...
                const photoURL = currentUser?.photoURL;
                if (!photoURL) {
                    currentUser.photoURL = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
                }
                setUser(currentUser);
                setLoader(!loader);
            } else {
                // User is signed out
                // ...
            }
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