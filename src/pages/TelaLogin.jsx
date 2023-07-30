import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FazerLogin } from "../api";
import { useState } from "react";
import { useContextoUsuario } from "../componentes/contexto/contextoUsuario";

export default function TelaLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { salvarUsuario } = useContextoUsuario();

  function ChamandoFuncao(event) {
    event.preventDefault();

    const dadosDoCliente = {
      email: email,
      password: senha,
    };

    const resposta = FazerLogin(dadosDoCliente);

    resposta.then((resp) => {
      salvarUsuario(resp.data);
      navigate("/habitos");
    });
  }

  return (
    <div>
      <SCtelaLogin>
        <img src="public/img/Group 8.png" alt="" />
        <form onSubmit={ChamandoFuncao}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />
          <input
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="senha"
          />

          <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </SCtelaLogin>
    </div>
  );
}

const SCtelaLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  input {
    margin-bottom: 6px;
    padding-left: 11px;

    border: 1px solid #d4d4d4;
    width: 303px;
    height: 45px;
    font-size: 19px;
    font-weight: 400;
    border-radius: 5px;
    background-color: #fff;

    &::placeholder {
      color: #dbdbdb;
    }
  }
  button {
    background-color: #52b6ff;
    border-radius: 5px;
    border: 3px solid #52b6ff;
    color: #ffffff;
    width: 320px;
    height: 45px;
    margin-bottom: 25px;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
  }
  img {
    width: 180px;
    height: 180px;
    margin-bottom: 32px;
    margin-top: 68px;
    background-color: #fff;
  }
`;
