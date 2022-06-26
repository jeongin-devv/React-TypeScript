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
