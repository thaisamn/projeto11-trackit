import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Rodape() {
  return (
    <div>
      <SCrodape>
        <SCbutoes to="/habitos">Hábitos</SCbutoes>
        <SCbutoesHoje to="/hoje">
          <CircularProgressbar
            value={50}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </SCbutoesHoje>
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
  color: #52b6ff;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;

  &:hover {
    font-size: 22px;
  }
`;

const SCbutoesHoje = styled(Link)`
  color: #fff;
  width: 91px;
  height: 91px;
  margin-bottom: 5%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    font-size: 22px;
  }
`;
