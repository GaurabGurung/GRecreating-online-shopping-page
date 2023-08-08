import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
  } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz1Q0skavpAbDCo0G9EJNLwUvFLBiPfr8",
    authDomain: "online-shopping-testing.firebaseapp.com",
    projectId: "online-shopping-testing",
    storageBucket: "online-shopping-testing.appspot.com",
    messagingSenderId: "797436626799",
    appId: "1:797436626799:web:bd0909f0bca13ef7a74a9a"
};
    
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup (auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect (auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef =  doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc (userDocRef);
 

    if(!userSnapShot.exists()) {
        const { displayName , email } = userAuth;
        const createdAt = new Date ();

        try {
            await setDoc (userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    } else {
        return userDocRef;
    }


} 