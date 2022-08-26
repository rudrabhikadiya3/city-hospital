import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const newUsers = (val) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, val.email, val.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              resolve("Email verification sent!");
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
          reject("SIGNUP ERROR: This email is already in use");
        }
      });
  });
};

export const LoginUser = (val) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, val.email, val.password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;

        if (!user.emailVerified) {
          reject("Please verify your email");
        } else {
          resolve("Login Successfully");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode.localeCompare("auth/wrong-password") === 0 ||
          errorCode.localeCompare("auth/user-not-found") === 0
        ) {
          reject("LOGIN ERROR: Wrong password or Email");
        }
      });
  });
};

export const logOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve("LOGOUT SUCCESSFULLY");
      })
      .catch((error) => {
        // An error happened
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};
