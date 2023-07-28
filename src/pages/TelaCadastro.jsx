import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TelaCadastro(){
    return(
        <div>
        <SCtelacadastro>
        <img src="../../public/img/Group 8.png" alt="" />
         <input type="text" placeholder="email"/>
         <input type="text" placeholder="senha"/>
         <input type="text" placeholder="nome"/>
         <input type="text" placeholder="foto"/>
         <button>Cadastrar</button>
         <Link to="/">Não tem uma conta? Cadastre-se!</Link>
        </SCtelacadastro>
        </div>
    );
}

const SCtelacadastro = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;

input{
    margin-bottom: 6px;
    padding-left: 11px ;
    border: 1px solid #d4d4d4;
    background-color: #fff;

    width: 303px;
    height: 45px;
    font-size: 19px;
    font-weight: 400;
    border-radius: 5px;
    &::placeholder{
        color: #DBDBDB;
    }
}
button{
    background-color: #52B6FF;
    text-align: center;
    border-radius: 5px;
    border: 3px solid #52B6FF;
    color:#FFFFFF;
    width: 320px ;
    height: 45px;
    margin-bottom: 25px;
    font-size: 20px;
    text-align: center;
    font-weight: 400;

}
img{
    width: 180px ;
    height: 180px ;
    margin-bottom: 32px;
    margin-top: 42px;
    background-color: #fff;

}




`;