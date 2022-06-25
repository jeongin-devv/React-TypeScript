import styled from 'styled-components';

type Content = {
  contents?:string;
}

export const LoginHeaderWrap = styled.div`
  margin: 90px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginHeaderTitle = styled.h1<Content>`
  margin-bottom: 20px;
  font-size: 25px;

  :before {
    content: '${(props) => props.contents || 'title을 전달해주세요'}';
  }
`;

export const LoginHeaderText = styled.div<Content>`
  width: 60%;
  opacity: 0.7;

  :before {
    content: '${(props) => props.contents || 'title을 전달해주세요'}';
  }
`;
