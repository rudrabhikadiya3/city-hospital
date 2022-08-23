import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

export const newUsers = (val) => {
  // firebase intigration

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, val.email, val.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const uid = user.uid;
              sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent!
                console.log("Email verification sent!");
              });
            } else {
              // User is signed out
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
            console.log('This email is already in use');
        }
      });
  });
};
