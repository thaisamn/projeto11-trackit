import axios from "axios";
const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const config = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export async function FazerCadastro(dados) {
  const resposta = await axios.post(`${baseURL}/auth/sign-up`, dados, config());

  return resposta;
}

export async function FazerLogin(dados) {
  const resposta = await axios.post(`${baseURL}/auth/login`, dados, config());

  return resposta;
}

export async function CriarHabito(dados) {
  const resposta = await axios.post(`${baseURL}/habits`, dados, config());

  return resposta;
}

export async function ListarHabitos() {
  const resposta = await axios.get(`${baseURL}/habits`, config());

  return resposta;
}

export async function DeletarHabito(idDoHabito) {
  const resposta = await axios.delete(
    `${baseURL}/habits/${idDoHabito}`,
    config()
  );

  return resposta;
}

export async function HabitosHoje() {
  const resposta = await axios.get(`${baseURL}/habits/today`, config());

  return resposta;
}

export async function MarcarComoFeito(idDoHabito) {
  const resposta = await axios.post(
    `${baseURL}/habits/${idDoHabito}/check`,
    null,
    config()
  );

  return resposta;
}

export async function DesmarcarComoFeito(idDoHabito) {
  const resposta = await axios.post(
    `${baseURL}/habits/${idDoHabito}/uncheck`,
    null,
    config()
  );

  return resposta;
}

export async function HistoricoHabitos() {
  const resposta = await axios.get(`${baseURL}/habits/history/daily`, config());

  return resposta;
}
