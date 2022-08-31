import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { history } from "../history";

export const newUsers = (val) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, val.email, val.password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendEmailVerification(auth.currentUser).then(() => {
              resolve("Email verification sent!");
            });
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
          resolve(user);
          history.push("/");
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
        resolve({ payload: "LOGOUT SUCCESSFULLY" });
      })
      .catch((error) => {
        // An error happened
        reject(error.code);
      });
  });
};

export const googleNewUser = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve({payload: user})
      })
      .catch((error) => {
        const errorCode = error.code;
        reject(errorCode)
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
};


export const facebookNewUser = () =>{
  return new Promise((resolve, reject) => {
    const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    resolve({payload: user})
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    if (errorCode.localeCompare("auth/operation-not-allowed") === 0) {
      reject("facebook provider pending by developer");
    }
  });
  });
}
