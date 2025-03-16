import React from "react";
import Image from "next/image";
import {FcGoogle} from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
function login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const {user:{displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth,provider);
    console.log(user)
    try {
      
    } catch (error) {
      
    }
  }
  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
        <div className="flex items-center justify-center gap-2">
          <Image
          src="/whatsapp.gif"
          alt="whatsapp"
          height={300}
          width={300}
          />
          <span className="text-7xl text-white">Whatsapp</span>
        </div>
        <button className="flex justify-between items-center bg-search-input-container-background p-5 gap-5 rounded-lg" onClick={handleLogin}>
          <FcGoogle className="text-4xl"/>
          <span className="text-white text-2xl">Login with Google</span>
        </button>
  </div>
}

export default login;
