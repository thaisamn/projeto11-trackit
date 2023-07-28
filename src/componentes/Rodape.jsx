import { Link } from "react-router-dom";
import styled from "styled-components";

export default function  Rodape(){
    return(
        <div>
            <SCrodape>
        <Link to="/habitos" >Hábitos</Link>
        <Link to="/hoje">Hoje</Link>
        <Link to="/historico">Históricos</Link>
        </SCrodape>
        </div>
    );
}


const SCrodape = styled.div`
background-color: #fff;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 70px;
position: fixed;
bottom: 0;
left: 0;
width: 100%;

button{
    background-color: #FFFFFF;
    border: none;
    font-size: 18px;
    color: #52B6FF ;
    font-weight: 400;

}

`;