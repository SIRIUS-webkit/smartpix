"use client";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebaseApp from "@/utils/firebase/config";

function login() {
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  const auth = getAuth(initFirebaseApp);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <div>
      <button type="button" className="primary-button" onClick={signIn}>
        Google Login
      </button>
    </div>
  );
}

export default login;
