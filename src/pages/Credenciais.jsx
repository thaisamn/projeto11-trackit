import styled from "styled-components";
import TelaCadastro from "./TelaCadastro";
import TelaLogin from "./TelaLogin";

export default function Credenciais(){
    return(
        <div>
        <SCcredenciais>
        
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



`;