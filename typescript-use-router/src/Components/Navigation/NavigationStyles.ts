import styled, { keyframes } from 'styled-components';
import Badge from '../Common/BadgeStyles';

type Props = {
  count: number;
};

const appearBtnAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const notificationAnimation = keyframes`
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-5px) rotateY(360deg);
  }
  100% {
    transform: none;
  }
`;

export const NavigationWrap = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f9f9fa;
  padding: 20px 50px;
  box-sizing: border-box;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavigationButton = styled.li`
  transform: translateY(50px);
  opacity: 0;
  animation: ${appearBtnAnimation} 0.3s ease-in-out forwards;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
  &:last-child {
    animation-delay: 0.8s;
  }
`;

export const NavigationAlarm = styled(Badge)<Props>`
  position: absolute;
  left: 15px;
  bottom: 15px;
  animation: ${notificationAnimation} 2s ease-in-out infinite;
  :before {
    content:'${(props) => props.count}'
  }
`;
