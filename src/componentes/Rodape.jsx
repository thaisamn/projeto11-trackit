import styled from "styled-components";

export default function  Rodape(){
    return(
        <div>
            <SCrodape>
        <button>Hábitos</button>
        <button>Hoje</button>
        <button>Históricos</button>
        </SCrodape>
        </div>
    );
}


const SCrodape = styled.div`

background-color: #FFFFFF;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 70px;
button{
    background-color: #FFFFFF;
    border: none;
    font-size: 18px;
    color: #52B6FF ;
    font-weight: 400;
}

`;