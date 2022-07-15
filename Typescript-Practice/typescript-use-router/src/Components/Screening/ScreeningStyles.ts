import styled from 'styled-components';
import { ScreeningType } from './ScreeningType';

export const ScreeningWrap = styled.div<ScreeningType>`
  position: absolute;
  z-index: 99;
  height: 100vh;
  background-color: yellow;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  top: 0;

  @media (max-width: 645px) {
    display: none;
  }

  :before {
    content: '${(props) => props.screeningText}';
  }
`;

export default { ScreeningWrap };
