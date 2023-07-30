import styled from "styled-components";
import { CriarHabito, DeletarHabito, ListarHabitos } from "../api";
import { useContextoUsuario } from "../componentes/contexto/contextoUsuario";
import { useEffect, useState } from "react";

export default function TelaHabitos() {
  const { pegarHabitos } = useContextoUsuario();
  const [habitos, setHabitos] = useState([]);
  const [nomeHabito, setNomeHabito] = useState("");
  const [diaHabito, setDiaHabito] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [formularioAberto, setFormularioAberto] = useState(false);

  const toggleDiaHabito = (dia) => {
    const jaexiste = diaHabito.includes(dia);
    if (jaexiste) {
      const novoArray = diaHabito.filter((d) => d !== dia);
      setDiaHabito(novoArray);
    } else {
      setDiaHabito([...diaHabito, dia]);
    }
  };

  const criarHabito = () => {
    setCarregando(true);
    CriarHabito({
      name: nomeHabito,
      days: diaHabito,
    })
      .catch((erro) => {
        alert(String(erro));
      })
      .then((resp) => {
        pegarHabitosDoUsuario();
        pegarHabitos();
        limparForumluario();
      });
    setCarregando(false);
  };

  const pegarHabitosDoUsuario = () => {
    const promessa = ListarHabitos();

    promessa.then((resp) => {
      setHabitos(resp.data);
    });
  };

  useEffect(() => {
    pegarHabitosDoUsuario();
    return () => {};
  }, []);

  const deletarHabito = (idHabito) => {
    const confirmado = confirm("Deseja deletar esse habito?");

    if (confirmado) {
      DeletarHabito(idHabito)
        .then()
        .finally((_) => pegarHabitosDoUsuario());
    }
  };

  const limparForumluario = () => {
    setNomeHabito("");
    setDiaHabito([]);
    setFormularioAberto(!formularioAberto);
  };

  return (
    <>
      <SCtelaHabitos>
        <SCtituloHabito>
          <h1>Meus hábitos</h1>
          <button
            data-test="habit-create-btn"
            disabled={formularioAberto}
            onClick={(_) => setFormularioAberto(!formularioAberto)}
          >
            +
          </button>
        </SCtituloHabito>
        {formularioAberto && (
          <SCcaixahabito data-test="habit-create-container">
            <input
              data-test="habit-name-input"
              value={nomeHabito}
              onChange={(e) => setNomeHabito(e.target.value)}
              type="text"
              placeholder="nome do hábito"
              disabled={carregando}
            />
            <SCbutoesSemanaisHabito>
              <BotoesDiasDaSemana
                toggleDoDia={(dia) => !carregando && toggleDiaHabito(dia)}
                diasHabito={diaHabito}
              />
            </SCbutoesSemanaisHabito>
            <SCbutoesFinais>
              <SCbotaoEspecial
                data-test="habit-create-cancel-btn"
                onClick={(_) => setFormularioAberto(false)}
              >
                Cancelar
              </SCbotaoEspecial>
              <button
                data-test="habit-create-save-btn"
                onClick={criarHabito}
                disabled={carregando}
              >
                Salvar
              </button>
            </SCbutoesFinais>
          </SCcaixahabito>
        )}
        {habitos.length > 0 ? (
          <>
            {habitos.map((habito, index) => (
              <SCcaixahabito data-test="habit-container" key={index}>
                <div>
                  <span data-test="habit-name">{habito.name}</span>
                  <button
                    data-test="habit-delete-btn"
                    onClick={(_) => deletarHabito(habito.id)}
                  >
                    excluir
                  </button>
                </div>
                <SCbutoesSemanaisHabito>
                  <BotoesDiasDaSemana diasHabito={habito.days} />
                </SCbutoesSemanaisHabito>
              </SCcaixahabito>
            ))}
          </>
        ) : (
          <div>
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          </div>
        )}
      </SCtelaHabitos>
    </>
  );
}

// funcoes

function BotoesDiasDaSemana({ diasHabito = [], toggleDoDia }) {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  return diasDaSemana.map((dia, index) => (
    <SCButaoDiasSemana
      data-test="habit-day"
      key={index}
      selecionado={diasHabito.includes(index)}
      onClick={(_) => toggleDoDia(index)}
    >
      {dia}
    </SCButaoDiasSemana>
  ));
}

//styled

const SCButaoDiasSemana = styled.button`
  background-color: ${(props) => (props.selecionado ? "#dbdbdb" : "#ffff")};
  margin-top: 8px;
  margin-right: 4px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  height: 30px;
  width: 30px;
  font-size: 19px;
  color: ${(props) => (props.selecionado ? "#ffff" : "#dbdbdb")};
`;

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
