import { gettingAuth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged, updateProfile } from "firebase/auth";

export const emailAuthProvider = async (email: string, password: string) => {
    try {
        if (gettingAuth) {
            const authCredential = await signInWithEmailAndPassword(gettingAuth, email, password);
            console.log(`Welcome ${authCredential.user.displayName}!`);
            console.log(`User Info: ${authCredential.user}!`);
            return authCredential;
        } else {
            const authCredential = await createUserWithEmailAndPassword(gettingAuth, email, password);
            console.log(`Welcome ${authCredential.user.displayName}!`);
            console.log(`User Info: ${authCredential.user}!`);
            return authCredential;
        }
    } catch (err) {
        console.error(err);
    }
};

export const anonymousAuthProvider = async () => {
    try {
        // const authCredential = 
        const authCredential = await signInAnonymously(gettingAuth);
        onAuthStateChanged(gettingAuth, (user) => {
            console.log(user?.uid);
        })
        return authCredential;
    } catch (e) {
        console.error(e);
    }
};

export const updateUserName = async (displayName:string, photoURL:string) => {
    try {
        if (gettingAuth) {
            await updateProfile(gettingAuth.currentUser!, {
                displayName: displayName,
                photoURL: photoURL    
            });
            window.alert("Your profile is successfully changed!")
        } else {
            window.alert("We don't have your information!");
        }
    } catch (err) {
        console.error(err);
    }
}