import styled from "styled-components";
import "./App.css";
import AreaLogada from "./pages/AreaLogada";
import Credenciais from "./pages/Credenciais";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />

        <Route path="/area" element={<AreaLogada />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
