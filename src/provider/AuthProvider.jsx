import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // update user profile
  const updateUserProfile = (updatedData) => {
    console.log(updatedData);

    return updateProfile(auth.currentUser, updatedData);
  };

  // send Password Reset Email
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // user logout
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   user of observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    createNewUser,
    loginUser,
    loginWithGoogle,
    userLogout,
    updateUserProfile,
    passwordReset,
    user,
    loading,
    setUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
