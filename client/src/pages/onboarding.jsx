import React from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
function onboarding() {
  const [{userInfo}] = useStateProvider()
  return <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
    <div className="flex items-center justify-center gap-2">
      <Image
      src="/whatsapp.gif"
      alt="whatsapp"
      width={300}
      height={300}
      />
      <span className="text-7xl">Whatsapp</span>
    </div>
    <h2 className="text-2xl">Create Your Profile</h2>
    <div className="flex mt-6 gap-6">
      <div className="flex flexx-col items-center justify-center mt-5 gap-6">
          {userInfo.name}
      </div>

    </div>
  </div>;
}

export default onboarding;
