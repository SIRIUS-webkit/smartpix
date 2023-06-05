"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebaseApp from "@/utils/firebase/config";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  const auth = getAuth(initFirebaseApp);
  const router = useRouter();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    if (result) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen max-w-[70%] mx-auto flex flex-col items-center text-center mt-[100px]">
      <h2 className="font-bold">Step into a world of boundless creativity!</h2>
      <p className="p2-regular-16">
        Prepare to be amazed as your prompts seamlessly metamorphose into
        breathtaking designs, vibrant images, and awe-inspiring artworks. With
        SmartPix at your side, your ideas will transcend imagination, unleashing
        a symphony of visual marvels that come alive before your eyes. Embrace
        the magic and let your creativity soar to new heights. Welcome aboard!
      </p>
      <button
        type="button"
        onClick={signIn}
        className="primary-button mt-[60px] flex items-center"
      >
        <FcGoogle className="text-[30px] mr-5 bg-white rounded-[2px]" />
        Login With Google
      </button>
    </div>
  );
}

export default Login;
