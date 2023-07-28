import styled from "styled-components";

export default function  Topo(){
    return(
        <div>
            <SCtopo>
        
        <img src="../../public/img/TrackIt.png" alt="" />
        <img src="../../public/img/Rectangle 14.png" alt="" />
        </SCtopo>
        </div>
    );
}

const SCtopo = styled.div`
background-color: #126BA5;
height: 70px;
width: 100%;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
img{
    margin-right: 15px;
    margin-left: 15px;
    background-color: #126BA5;
}

`;