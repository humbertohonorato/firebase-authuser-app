import { useState } from 'react';
import { auth, db } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

const useAuth = () => {
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState("");

    const registerUser = async (email, password, name, surname, birthDate) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(collection(db, 'users'), user.uid), {
                name,
                surname,
                birthDate,
                email
            });

            setUserData({ uid: user.uid, name, surname, birthDate, email });

            return "User registered successfully!";
        } catch (error) {
            console.error("Error registering user:", error);

            if (error.code === 'auth/email-already-in-use') {
                return "This email is already in use.";
            } else {
                return "An error occurred during registration.";
            }
        }
    };


    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                setUserData({ uid: user.uid, ...userDoc.data() });
                setMessage("Login successful!");
            } else {
                throw new Error("No such user data!");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setMessage("Error logging in: " + error.message);
            throw error;
        }
    };

    return { userData, registerUser, loginUser, message };
};

export default useAuth;
