import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";
import TelaHabitos from "./pages/TelaHabitos";
import TelaHoje from "./pages/TelaHoje";
import TelaHistoricos from "./pages/TelaHistorico";
import Corpo from "./componentes/Corpo";
import { ContextoUsuarioProvider } from "./componentes/contexto/contextoUsuario";

function App() {
  return (
    <ContextoUsuarioProvider>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/cadastro" element={<TelaCadastro />} />

            <Route
              path="/habitos"
              element={<Corpo children={<TelaHabitos />} />}
            />
            <Route path="/hoje" element={<Corpo children={<TelaHoje />} />} />
            <Route
              path="/historico"
              element={<Corpo children={<TelaHistoricos />} />}
            />
          </Routes>
        </>
      </BrowserRouter>
    </ContextoUsuarioProvider>
  );
}

export default App;
