import styled, { keyframes } from 'styled-components';

const hideSplashScreen = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

export const LoadingWrap = styled.div`
  background-color: yellow;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 132px;
  animation: ${hideSplashScreen} 0.3s ease-in-out forwards;
  animation-delay: 0.3s;
`;

export default { LoadingWrap };
