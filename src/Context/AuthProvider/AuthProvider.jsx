import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";


const googleProvider=new GoogleAuthProvider()



const AuthProvider = ({ children }) => {
  const [user, Setuser] = useState(null);

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth , googleProvider)
  } 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      Setuser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    CreateUser,
    googleSignIn,
    user,
  };

  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
