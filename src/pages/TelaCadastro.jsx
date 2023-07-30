import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FazerCadastro } from "../api";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function TelaCadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [carregando, setCarregando] = useState(false);

  function ChamandoFuncao(event) {
    setCarregando(true);
    event.preventDefault();

    const dadosDoCliente = {
      email: email,
      name: nome,
      image: foto,
      password: senha,
    };

    const resposta = FazerCadastro(dadosDoCliente);

    resposta
      .then(() => {
        navigate("/");
      })
      .catch((_) => {
        alert("Erro ao se cadastrar. Por favor, tente novamente");
      })
      .finally((_) => {
        setCarregando(false);
      });
  }

  return (
    <div>
      <SCtelacadastro>
        <img src="../../public/img/Group 8.png" alt="" />
        <form onSubmit={ChamandoFuncao}>
          <input
            disabled={carregando}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />
          <input
            disabled={carregando}
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="senha"
          />
          <input
            disabled={carregando}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="nome"
          />
          <input
            disabled={carregando}
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            required
            placeholder="foto"
          />
          <button type="submit">
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
              "Cadastrar"
            )}
          </button>
        </form>
        <Link to="/">Já tem uma conta? faça login!</Link>
      </SCtelacadastro>
    </div>
  );
}

const SCtelacadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #d4d4d4;
    background-color: #fff;

    width: 303px;
    height: 45px;
    font-size: 19px;
    font-weight: 400;
    border-radius: 5px;
    &::placeholder {
      color: #dbdbdb;
    }
  }
  button {
    background-color: #52b6ff;
    text-align: center;
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
    margin-top: 42px;
    background-color: #fff;
  }
`;
