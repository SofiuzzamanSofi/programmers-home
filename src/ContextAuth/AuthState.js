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


    const createNewUser = (name, photo, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErro(error);
                    });
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro(errorMessage);
                // ..
            });
    };

    const signInLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(11);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro(errorMessage);
                console.log(22);
            });
    };


    const signInPopUp = (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErro(errorMessage);
            });
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



    const authInfo = { user, setUser, loader, setLoader, error, setErro, createNewUser, signInLogIn, signInPopUp, signOutLogOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;