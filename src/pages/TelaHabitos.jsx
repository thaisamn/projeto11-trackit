import styled from "styled-components";

export default function TelaHabitos() {
  return (
    <SCtelaHabitos>
      <SCtituloHabito>
        <h1>Meus hábitos</h1>
        <button>+</button>
      </SCtituloHabito>
      <SCcaixahabito>
        <input type="text" placeholder="nome do hábito" />
        <SCbutoesSemanaisHabito>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
        </SCbutoesSemanaisHabito>
        <SCbutoesFinais>
            <button>Cancelar</button>
            <button>Salvar</button>
        </SCbutoesFinais>

      </SCcaixahabito>
      
      <div>
        <p>
          Você não tem nenhum hábito cadastrado ainda. 
        </p>
        <br />
        <p>
        Adicione um hábito para começar a trackear!
        </p>
      </div>
    </SCtelaHabitos>
  );
}


//styled

const SCtituloHabito = styled.div`
 display: flex;
    width: 100%;
    justify-content: space-between;
 
 h1 {
    font-size: 23px;
    color: #126ba5;
    font-weight: 400;
  }
 button {
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    color: #fff;
    font-size: 27px;
    font-weight: 400;
  }
`;

const SCbutoesSemanaisHabito = styled.div`

button{
    background-color: #fff;
    margin-top: 8px;
    margin-right: 4px;
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    height: 30px;
    width: 30px;
    font-size: 19px;
    color: #DBDBDB;
}
`;

const SCbutoesFinais = styled.div`
    margin-top: 29px;
    margin-left: 5px;
    display: flex;
    justify-content: end;
    button{background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin-left: 5px;
    }
`;

const SCcaixahabito = styled.div`
margin-top: 20px ;
margin-bottom: 20px ;

background-color: #fff;
height: 180px;
padding: 17px;
display: flex;
flex-direction: column ;
border-radius: 5px;
width: 100%;

input{
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    height: 45px;
    padding-left: 15px;
    font-size: 19px;
    &::placeholder{
        color: #DBDBDB;
    }
}

`;


const SCtelaHabitos = styled.div`
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  margin-top: 28px;
div{

    
}
  
 
`;
