import styled from "styled-components";
import TelaHabitos from "../pages/TelaHabitos";
import TelaHistoricos from "../pages/TelaHistorico";
import TelaHoje from "../pages/TelaHoje";

export default function  Corpo(){
    return(
        <div><SCcorpo>
        <TelaHabitos/>
        <TelaHoje/>
        <TelaHistoricos/>
        </SCcorpo>
        </div>
    );
}

const SCcorpo = styled.div`

background-color: #F2F2F2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;




`;