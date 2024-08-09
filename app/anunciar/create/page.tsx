"use client";

import { useState } from "react";
// import BottomNavigation from "@/app/components/bottom-navigation";
import Header from "@/app/components/header";
import BottomNavigation from "@/app/components/bottom-navigation";
import HeaderCreateAd from "./header-create-ad";


const CrateAd = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log("upload")
  };

  return (
    <>
      <Header />
      <div className="px-2 py-4">
        <HeaderCreateAd />
      </div>
      <BottomNavigation />
    </>
  );
}

export default CrateAd;
