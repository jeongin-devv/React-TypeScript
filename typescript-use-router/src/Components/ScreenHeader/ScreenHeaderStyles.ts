import styled, { keyframes } from 'styled-components';

const rotateCog = keyframes` {
  from {
    transform: none;
  }
  to {
    transform: rotateZ(360deg);
  }
}`;

export default styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  margin-bottom: 15px;


  & h1 {
    font-size: 32px;
    font-weight: 600;
  }

  & div span {
    margin-left: 25px;
  }

  & div span .fa-cog:hover {
    animation: ${rotateCog} 1s linear infinite;
  }
`;

export const ChatScreenWrap = styled.header`
  padding: 25px;
  margin-bottom: 15px;
  display: flex;
  background-color: skyblue;
  align-items: center;
  justify-content: center;

  & div {
    width: 33%;
  }

  & h1 {
    font-size: 28px;
    font-weight: 600;
  }

  & div:first-child {
    margin-right: auto;  
    text-align: left;
  }

  & div:nth-child(2) {
    text-align: center;
  }

  & div:last-child {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }

  & div span:last-child {
    margin-left: 20px;
  }
`;
