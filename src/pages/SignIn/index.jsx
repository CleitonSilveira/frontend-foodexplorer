import { Link } from "react-router-dom";
import { useState } from "react";

import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import polygon from "../../assets/polygon.svg"
import { InputDishInfo } from "../../components/InputDishInfo";
import { Button } from "../../components/Button";

export function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  function handlePressEnter(e) {
    if(e.key === 'Enter') {
      handleSignIn()
    }
  }

  return (
    <Container>
      <div className="top">
        <img src={polygon} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <form action="">
        <h2>Faça login</h2>
        <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <InputDishInfo
              id="email"
              placeholder="exemplo@exemplo.com.br"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Senha</label>
            <InputDishInfo
              id="password"
              placeholder="Insira sua senha"
              type="password"
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handlePressEnter}
            />
          </div>
          <Button title="Entrar" onClick={handleSignIn} />
          <Link to="/register">Criar uma conta</Link>
      </form>
    </Container>
  )
}