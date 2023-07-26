import styled from "styled-components";
import TelaCadastro from "./TelaCadastro";
import TelaLogin from "./TelaLogin";

export default function Credenciais(){
    return(
        <div>
        <SCcredenciais>
        <img src="../../public/img/Group 8.png" alt="" />
        <TelaLogin/>
        <TelaCadastro/>
        </SCcredenciais>
        </div>
    );
}


const SCcredenciais = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    width: 180px ;
    height: 180px ;
    margin-bottom: 32px;
    margin-top: 68px;
}


`;