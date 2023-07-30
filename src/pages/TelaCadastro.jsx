import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FazerCadastro } from "../api";
import { useState } from "react";

export default function TelaCadastro(){
	const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function ChamandoFuncao(event){
        event.preventDefault(); 
      

        const dadosDoCliente = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }

        const resposta = FazerCadastro(dadosDoCliente)

        resposta.then(() => navigate("/")) 
    }
    
    
    
    
    
    
    
    return(
        <div>
        <SCtelacadastro>
        <img src="../../public/img/Group 8.png" alt="" />
        <form onSubmit={ChamandoFuncao} >
         <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="email"/>
         <input type="text" value={senha} onChange={e => setSenha(e.target.value)} required placeholder="senha"/>
         <input type="text" value={nome} onChange={e => setNome(e.target.value)} required placeholder="nome"/>
         <input type="text" value={foto} onChange={e => setFoto(e.target.value)} required placeholder="foto"/>
         <button type="submit" >Cadastrar</button>
         </form>
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