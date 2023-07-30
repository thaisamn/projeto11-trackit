import { createContext, useContext, useState } from "react";

const valorInicial = {
  token: "",
  usuario: {},
  salvarToken: (token) => {},
  salvarUsuario: (dados) => {},
};

const contextoUsuario = createContext(valorInicial);

const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(valorInicial.usuario);
  const [token, setToken] = useState("");

  const salvarToken = async (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const salvarUsuario = (dados) => {
    salvarToken(dados.token);
    setUsuario({ ...dados });
  };

  return (
    <contextoUsuario.Provider
      value={{ salvarToken, usuario, token, salvarUsuario }}
    >
      {children}
    </contextoUsuario.Provider>
  );
};

const useContextoUsuario = () => {
  return useContext(contextoUsuario);
};

export { ContextoUsuarioProvider, useContextoUsuario };
