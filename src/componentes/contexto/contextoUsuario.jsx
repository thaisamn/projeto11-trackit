import { createContext, useContext, useEffect, useState } from "react";
import { HabitosHoje } from "../../api";

const valorInicial = {
  token: "",
  usuario: {},
  habitos: {
    habitosHoje: [],
    porcentagem: 0,
  },
  salvarToken: (token) => {},
  salvarUsuario: (dados) => {},
  pegarHabitos: () => {},
};

const contextoUsuario = createContext(valorInicial);

const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(valorInicial.usuario);
  const [habitos, setHabitos] = useState(valorInicial.habitos);

  const [token, setToken] = useState("");

  useEffect(() => {
    const dadoString = localStorage.getItem("usuario");
    const usuario = JSON.parse(dadoString);
    if (usuario) {
      setToken(usuario.token);
      setUsuario(usuario);
      pegarHabitos();
    }
  }, []);

  const calcularPorcentagem = (habitosDeHoje) => {
    const totalTarefas = habitosDeHoje.length;
    const tarefasConcluidas = habitosDeHoje.filter(
      (habito) => habito.done
    ).length;
    const percentual = (tarefasConcluidas / totalTarefas) * 100;

    return percentual.toFixed(0);
  };

  const pegarHabitos = async () => {
    const resposta = await HabitosHoje();
    const dados = {
      habitosHoje: resposta.data,
      porcentagem: calcularPorcentagem(resposta.data),
    };

    setHabitos(dados);
  };

  const salvarToken = async (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const salvarUsuario = (dados) => {
    salvarToken(dados.token);
    localStorage.setItem("usuario", JSON.stringify(dados));
    setUsuario({ ...dados });
  };

  return (
    <contextoUsuario.Provider
      value={{
        salvarToken,
        usuario,
        token,
        salvarUsuario,
        pegarHabitos,
        habitos,
      }}
    >
      {children}
    </contextoUsuario.Provider>
  );
};

const useContextoUsuario = () => {
  return useContext(contextoUsuario);
};

export { ContextoUsuarioProvider, useContextoUsuario };
