import styled from "styled-components";
import { useState, useEffect } from "react";
import { DesmarcarComoFeito, HabitosHoje, MarcarComoFeito } from "../api";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);

const diaSemana = {
  0: "Domingo",
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sabado",
};

export default function TelaHoje() {
  const [habitosDeHoje, setHabitosDeHoje] = useState([]);
  const [porcentagemConcluido, setporcentagemConcluido] = useState(0);

  const calcularPorcentagem = () => {
    const totalTarefas = habitosDeHoje.length;
    const tarefasConcluidas = habitosDeHoje.filter(
      (habito) => habito.done
    ).length;
    return (tarefasConcluidas / totalTarefas) * 100;
  };

  useEffect(() => {
    const porcentagem = calcularPorcentagem();
    setporcentagemConcluido(porcentagem);
  }, [habitosDeHoje]);

  const pegarHabitos = async () => {
    const resposta = await HabitosHoje();
    setHabitosDeHoje(resposta.data);
  };

  const toggleFeito = (idHabito, feito) => {
    if (feito) {
      DesmarcarComoFeito(idHabito).then((_) => pegarHabitos());
    } else {
      MarcarComoFeito(idHabito).then((_) => pegarHabitos());
    }
  };

  useEffect(() => {
    pegarHabitos();
    return () => {};
  }, []);

  return (
    <>
      <SCtelaHoje>
        <SCcaixatitulo>
          <h1>
            {diaSemana[dayjs().weekday()]}, {dayjs().format("DD/MM")}
          </h1>
          {porcentagemConcluido > 0 ? (
            <p
              style={{
                color: "#8FC549",
              }}
            >{`${porcentagemConcluido}% dos hábitos concluídos`}</p>
          ) : (
            <p>Nenhum hábito concluído ainda</p>
          )}
        </SCcaixatitulo>
        {habitosDeHoje.length > 0 &&
          habitosDeHoje.map((habito) => (
            <SCcaixahabito>
              <SCtextos>
                <h1>{habito.name} </h1>
                <SCp sucesso={habito.done}>
                  Sequência atual: <span>{habito.currentSequence} dias</span>
                </SCp>
                <SCp
                  sucesso={
                    habito.currentSequence &&
                    habito.currentSequence >= habito.highestSequence
                  }
                >
                  Seu recorde: <span>{habito.highestSequence} dias</span>
                </SCp>
              </SCtextos>
              <SCcheck
                feito={habito.done}
                onClick={(_) => toggleFeito(habito.id, habito.done)}
              >
                <ion-icon name="checkmark-sharp"></ion-icon>
              </SCcheck>
            </SCcaixahabito>
          ))}
      </SCtelaHoje>
    </>
  );
}

const SCp = styled.p`
  background-color: #fff;
  font-family: Lexend Deca;
  font-size: 13px;
  font-weight: 400;
  color: "#666";

  span {
    background-color: #fff;
    color: ${(props) => (props.sucesso ? "#8fc549" : "#666")};
  }
`;

//styled

const SCtelaHoje = styled.div`
  width: 100%;
  display: flex;
  margin: 18px;
  flex-direction: column;
  margin-top: 28px;
`;

const SCcaixahabito = styled.div`
  box-sizing: border-box;
  padding: 13px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SCcaixatitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 20px;

  h1 {
    color: #126ba5;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
  }
  p {
    color: #bababa;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
  }
`;

const SCtextos = styled.div`
  background-color: #fff;

  h1 {
    background-color: #fff;
    color: #666;
    font-family: Lexend Deca;
    font-size: 19.976px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

const SCcheck = styled.div`
  margin-left: 5px;
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  color: #fff;
  background: ${(props) => (props.feito ? "#8FC549" : "#ebebeb")};
  ion-icon {
    font-size: 44px;
    background: ${(props) => (props.feito ? "#8FC549" : "#ebebeb")};
  }
`;
