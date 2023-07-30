import { Link } from "react-router-dom";
import styled from "styled-components";

export default function  Rodape(){
    return(
        <div>
            <SCrodape>
        <SCbutoes to="/habitos" >Hábitos</SCbutoes>
        <SCbutoesHoje to="/hoje">Hoje</SCbutoesHoje>
        <SCbutoes to="/historico">Históricos</SCbutoes>
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



`;

const SCbutoes = styled(Link)`
border: none;
background-color: #fff;
color: #52B6FF;
text-align: center;
font-size: 18px;
font-weight: 400;
text-decoration: none;
&:hover {
  font-size: 22px;

  
  }
`;

const SCbutoesHoje = styled(Link)`
border: none;
display: flex;
justify-content: center;
align-items: center;
background-color: #52B6FF;
color: #fff;
text-align: center;
font-size: 18px;
font-weight: 400;
width: 91px;
height: 91px;
border-radius: 50%;
margin-bottom: 5%;
text-decoration: none;
&:hover {
  font-size: 22px;

  
  }

`;