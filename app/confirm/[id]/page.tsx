"use client"
import { ConfirmAccount } from "@/app/services/confirmAccount";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const Confirm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    ConfirmAccount({ id })
      .then((res) => {
        if (res.ok) {
          // Redireciona para a home após confirmação bem-sucedida
          router.push('/');
        } else {
          console.error("Houve um erro na confirmação");
        }
      })
      .catch((err) => {
        console.error("Houve um erro", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, router]);
  return (<>

  </>);
}

export default Confirm;