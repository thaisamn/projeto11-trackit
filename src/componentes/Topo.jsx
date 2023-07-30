import styled from "styled-components";
import { useContextoUsuario } from "./contexto/contextoUsuario";

export default function Topo() {
  const { usuario } = useContextoUsuario();
  console.log(usuario);
  return (
    <div data-test="header">
      <SCtopo>
        <img src="../../public/img/TrackIt.png" alt="" />
        <SCAvatar data-test="avatar" src={usuario.image} alt="" />
      </SCtopo>
    </div>
  );
}

const SCAvatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;

const SCtopo = styled.div`
  background-color: #126ba5;
  height: 70px;
  width: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  img {
    margin-right: 15px;
    margin-left: 15px;
    background-color: #126ba5;
  }
`;
