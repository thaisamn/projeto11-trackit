import styled from "styled-components";
import Topo from "./Topo";
import Rodape from "./Rodape";

export default function  Corpo({children}){
    return(
        
        <SCcorpo>
            <Topo/>
            {children}
            <Rodape/>
        </SCcorpo>
        
    );
}

const SCcorpo = styled.div`
display: flex;
width: 100%;
height: 100%;
margin-top: 70px;
margin-bottom: 70px;




`;