import styled from 'styled-components';

export const StatusBarWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 5px 10px 5px;
  height: 30px;
  margin-bottom: 10px;

  & div {
    width: 33%;
  }
`;

export const StatusBarNetworksWrap = styled.div`
  & span {
    float:left;
    margin-right: 5px;
  }
  & i {
    float:left;
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
