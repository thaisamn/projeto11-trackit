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
padding-left:18px;
padding-right:18px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


`;