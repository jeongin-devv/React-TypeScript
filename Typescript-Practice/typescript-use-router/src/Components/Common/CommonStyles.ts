import styled from 'styled-components';

export const Badge = styled.span`
  background-color: tomato;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;

export const CommonWrap = styled.main`
  padding: 0px 25px;
`;

export const CommonIconRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommonIconComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & i {
    font-size: 35px;
  }

  & span {
    margin-top: 18px;
  }
`;
