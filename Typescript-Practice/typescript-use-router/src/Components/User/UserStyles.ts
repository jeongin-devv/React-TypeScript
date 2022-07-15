import styled from 'styled-components';

export const UserElementWrap = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const UserElementLeftColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const UserElementRightColumn = styled.div`
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  & i {
    margin-left: 10px;
  }

  & .time {
    margin-bottom: 10px;
    display: block;
  }
`;

export const UserElementImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin-right: 20px;
`;

export const UserElementImgXL = styled(UserElementImg)`
  width: 80px;
  height: 80px;
`;

export const UserElementImgSm = styled(UserElementImg)`
  width: 60px;
  height: 60px;
  border-radius: 25px;
`;

export const UserElementName = styled.div`
  & h4 {
    float: left;
    font-weight: 600;
    font-size: 22px;
  }

  & h6 {
    margin-top: 8px;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const UserElementNameNonBold = styled.div`
  & h4 {
    text-align: left;
    font-size: 22px;
    font-weight: 400;
  }

  & h6 {
    margin-top: 8px;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
