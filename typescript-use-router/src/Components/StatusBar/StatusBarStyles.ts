import styled from 'styled-components';

export const StatusBarWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 3px;

  & div {
    width: 33%;
  }
`;

export const StatusBarNetworksWrap = styled.div`
  & span {
    margin-right: 5px;
  }
`;

export const StatusBarClockWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatusBarBatteryWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & .fa-battery-full {
    margin: 0px 5px;
  }
`;
