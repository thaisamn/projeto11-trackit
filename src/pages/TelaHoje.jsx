import styled from "styled-components";

export default function TelaHoje() {
  return (
    <>
      <SCtelaHoje>
        <SCcaixatitulo>
          <h1>Segunda, 17/05</h1>
          <p>Nenhum hábito concluído ainda</p>
        </SCcaixatitulo>
        <SCcaixahabito>
          <SCtextos>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </SCtextos>
          <SCcheck>
          <ion-icon name="checkmark-sharp"></ion-icon>
          </SCcheck>
        </SCcaixahabito>


        <SCcaixahabito>
          <SCtextos>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </SCtextos>
          <SCcheck>
          <ion-icon name="checkmark-sharp"></ion-icon>
          </SCcheck>
        </SCcaixahabito>

        <SCcaixahabito>
          <SCtextos>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </SCtextos>
          <SCcheck>
          <ion-icon name="checkmark-sharp"></ion-icon>
          </SCcheck>
        </SCcaixahabito>
      </SCtelaHoje>
    </>
  );
}

//styled

const SCtelaHoje = styled.div`
  width: 100%;
  display: flex;
  margin: 18px;
  flex-direction: column;
  margin-top: 28px;
`;

const SCcaixahabito = styled.div`
  box-sizing: border-box;
  padding: 13px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SCcaixatitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 20px;
  

  h1 {
    color: #126BA5;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
  }
  p {
    color: #BABABA;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;

  }
`;

const SCtextos = styled.div`
background-color: #fff;
h1{
  background-color: #fff;
  color: #666;
  font-family: Lexend Deca;
  font-size: 19.976px;
  font-weight: 400;
  margin-bottom: 8px;
}
 p{
    background-color: #fff;
    color: #666;
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
 }
`;

const SCcheck = styled.div`
  margin-left: 5px;
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
border: 1px solid #E7E7E7;
color: #fff;
background: #EBEBEB;
ion-icon {
  font-size: 44px;
background: #EBEBEB;


  
}
  
`;
