import styled from "styled-components";
import Corpo from "../componentes/Corpo";
import Rodape from "../componentes/Rodape";
import Topo from "../componentes/Topo";

export default function AreaLogada() {
  return (
    <SCareaLogada>
      <Topo />
      <Corpo />
      <Rodape />
    </SCareaLogada>
  );
}

const SCareaLogada = styled.div`
  position: relative;
`;
