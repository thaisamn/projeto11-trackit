import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FazerLogin } from "../api";
import { useState } from "react";
import { useContextoUsuario } from "../componentes/contexto/contextoUsuario";
import { ThreeDots } from "react-loader-spinner";

export default function TelaLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { salvarUsuario } = useContextoUsuario();
  const [carregando, setCarregando] = useState(false);

  function ChamandoFuncao(event) {
    setCarregando(true);
    event.preventDefault();

    const dadosDoCliente = {
      email: email,
      password: senha,
    };

    const resposta = FazerLogin(dadosDoCliente);

    resposta
      .then((resp) => {
        salvarUsuario(resp.data);
        navigate("/hoje");
      })
      .catch((_) => {
        alert("Erro ao fazer login, revise os dados enviados");
      });

    setCarregando(false);
  }

  return (
    <div>
      <SCtelaLogin>
        <img src="assets/img/Group 8.png" alt="" />
        <form onSubmit={ChamandoFuncao}>
          <input
            data-test="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
            disabled={carregando}
          />
          <input
            data-test="password-input"
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="senha"
            disabled={carregando}
          />

          <button data-test="login-btn" type="submit" disabled={carregando}>
            {carregando ? (
              <ThreeDots
                height="80"
                width="80"
                color="#fff"
                wrapperStyle={{
                  background: "transparent",
                  "background-color": "transparent",
                }}
                wrapperClassName=""
              />
            ) : (
              "Entrar"
            )}
          </button>
        </form>
        <SClink data-test="signup-link" to="/cadastro">
          Não tem uma conta? Cadastre-se!
        </SClink>
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

  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      background-color: transparent;
    }
  }
  img {
    width: 180px;
    height: 180px;
    margin-bottom: 32px;
    margin-top: 68px;
    background-color: #fff;
  }
`;
const SClink = styled(Link)`
  background-color: #fff;

  &:hover {
  }
`;

// const SCform = styled(form)`
//   background-color: #fff;

//   &:hover {
//     font-size: 22px;
//   }
// `;
