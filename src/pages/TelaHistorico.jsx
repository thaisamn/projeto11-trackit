import styled from "styled-components";
import Topo from "../componentes/Topo";
import Rodape from "../componentes/Rodape";

export default function TelaHistoricos(){
    return(
        <div>
            
        <SCtelaHistorico>
        
        <h1>Históricos</h1>
        <p>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
        </p>
      
        </SCtelaHistorico>
        
        </div>
    );
}

const SCtelaHistorico = styled.div`


  width: 100%;
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: start;
  margin-top: 28px;

  h1 {
    font-size: 23px;
    color: #126ba5;
    font-weight: 400;
    text-align: center;
    margin-bottom: 17px;
  }


`;

