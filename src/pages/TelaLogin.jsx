import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function TelaLogin(){
    const navegador = useNavigate()
    function login(){
        navegador("/habitos")

    }
    
    
    return(
        <div>
        <SCtelaLogin>
            <img src="public/img/Group 8.png" alt="" />
         <input type="text" placeholder="email"/>
         <input type="text" placeholder="senha"/>
         <button onClick={login} >Entrar</button>
         <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </SCtelaLogin>
        </div>
    );
}






const SCtelaLogin = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;

input{
    margin-bottom: 6px;
    padding-left: 11px ;

    border: 1px solid #d4d4d4;
    width: 303px;
    height: 45px;
    font-size: 19px;
    font-weight: 400;
    border-radius: 5px;
    background-color: #fff;

    &::placeholder{
        color: #DBDBDB;
    }
}
button{
    background-color: #52B6FF;
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
    margin-top: 68px;
    background-color: #fff;

}

`;