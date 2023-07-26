import styled from "styled-components";

export default function TelaLogin(){
    return(
        <div>
        <SCtelaLogin>
         <input type="text" placeholder="email"/>
         <input type="text" placeholder="senha"/>
         <button>Entrar</button>
         link
        </SCtelaLogin>
        </div>
    );
}

const SCtelaLogin = styled.div`

display: flex;
flex-direction: column;

input{
    margin-bottom: 6px;
    padding-left: 11px ;

    border: 1px solid #d4d4d4;
    color: black;
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
    border-radius: 5px;
    border: 3px solid #52B6FF;
    color:#FFFFFF;
    width: 100% ;
    height: 45px;
    margin-bottom: 25px;
    font-size: 20px;
    text-align: center;
    font-weight: 400;

}

`;