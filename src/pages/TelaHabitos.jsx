import styled from "styled-components";
import { CriarHabito, ListarHabitos } from "../api";
import { useContextoUsuario } from "../componentes/contexto/contextoUsuario";
import { useEffect } from "react";

export default function TelaHabitos() {
  const { token } = useContextoUsuario();
  console.log("🚀 ~ file: TelaHabitos.jsx:7 ~ TelaHabitos ~ token:", token);

  useEffect(() => {
    ListarHabitos();

    return () => {};
  }, []);

  function ChamandoFuncao() {
    CriarHabito();
  }

  return (
    <>
      <SCtelaHabitos>
        <SCtituloHabito>
          <h1>Meus hábitos</h1>
          <button onClick={ChamandoFuncao}>+</button>
        </SCtituloHabito>
        <SCcaixahabito>
          <input type="text" placeholder="nome do hábito" />
          <SCbutoesSemanaisHabito>
            <BotoesDiasDaSemana />
          </SCbutoesSemanaisHabito>
          <SCbutoesFinais>
            <SCbotaoEspecial>Cancelar</SCbotaoEspecial>
            <button>Salvar</button>
          </SCbutoesFinais>
        </SCcaixahabito>

        <div>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </div>
      </SCtelaHabitos>
    </>
  );
}

// funcoes

function BotoesDiasDaSemana() {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
  return diasDaSemana.map((dia) => <button>{dia}</button>);
}

//styled

const SCtelaHabitos = styled.div`
  width: 100%;
  display: flex;
  margin: 18px;
  flex-direction: column;
  margin-top: 28px;
`;

const SCtituloHabito = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 23px;
    color: #126ba5;
    font-weight: 400;
    text-align: center;
  }
  button {
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    color: #fff;
    font-size: 27px;
    font-weight: 400;
  }
`;

const SCbutoesSemanaisHabito = styled.div`
  background-color: #fff;
  button {
    background-color: #fff;
    margin-top: 8px;
    margin-right: 4px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    height: 30px;
    width: 30px;
    font-size: 19px;
    color: #dbdbdb;
  }
`;

const SCbutoesFinais = styled.div`
  margin-top: 29px;
  margin-left: 5px;
  display: flex;
  text-align: center;
  justify-content: end;
  background-color: #fff;
  button {
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

const SCbotaoEspecial = styled.div`
  display: flex;
  align-items: center;
  color: #52b6ff;
  background-color: #fff;
  width: 90px;
  height: 35px;
  button {
    width: 84px;
    height: 35px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

const SCcaixahabito = styled.div`
  box-sizing: border-box;
  margin-bottom: 29px;
  margin-top: 22px;
  padding: 18px;
  background-color: #fff;
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  input {
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    height: 45px;
    padding-left: 15px;
    font-size: 19px;
    &::placeholder {
      color: #dbdbdb;
    }
  }
`;
