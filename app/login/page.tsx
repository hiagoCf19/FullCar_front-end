"use client"

import { FormEvent, useState } from "react";
import { RequestLogin } from "../services/login";
import { useAuth } from "../components/hooks/useAuth";



const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setToken } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const endpoint = 'login'
    e.preventDefault()
    RequestLogin({ setToken, endpoint, email, password })
      .then((response) => {
        if (response === 200) {
          console.log('acesso liberado')
        } else {
          console.log('acesso negado')
        }
      })
  }

  return (
    <form action="" onSubmit={handleSubmit} className="">

      <input type="text" placeholder="login" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit">enviar</button>
    </form>
  );
}

export default LoginPage;