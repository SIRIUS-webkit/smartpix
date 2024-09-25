"use client";
import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import initFirebaseApp from "./firebase/config";

const auth = getAuth(initFirebaseApp);
const db = getFirestore(initFirebaseApp);

export const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user);
        const userRef = doc(db, "users", user.uid); // Reference to the user document

        // Store user data in Firestore
        await setDoc(
          userRef,
          {
            uid: user.uid,
            username: user.displayName || "Anonymous", // Store display name or anonymous if not available
            email: user.email,
            isPremium: false,
          },
          { merge: true }
        );

        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
