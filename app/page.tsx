"use client"
import { useEffect, useState } from "react";
import Header from "./components/header";
import { UseSession } from "./hooks/useSession";


export default function Home() {
  const { userDetails } = UseSession();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Header />

      {userDetails != null && (
        <p>{userDetails.email}</p>
      )}
    </>
  );
}
