import styled from 'styled-components';
import { LoginHeaderContentType } from './LoginType';

export const LoginHeaderWrap = styled.div`
  margin: 90px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginHeaderTitle = styled.h1<LoginHeaderContentType>`
  margin-bottom: 20px;
  font-size: 25px;

  :before {
    content: '${(props) => props.contents || 'title을 전달해주세요'}';
  }
`;

export const LoginHeaderText = styled.div<LoginHeaderContentType>`
  width: 60%;
  opacity: 0.7;

  :before {
    content: '${(props) => props.contents || 'title을 전달해주세요'}';
  }
`;

export const LoginFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;

  & input {
    border: none;
    padding: 15px 0px;
    font-size: 18px;
    margin-bottom: 25px;
  }

  & input:not([type="submit"]) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: border-color 0.3s ease-in-out;
  }

  & input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  & input:focus {
    border-color: yellow;
  }

  & input[type="submit"] {
    background-color: yellow;
    cursor: pointer;
    padding: 20px 0px;
    border-radius: 5px;
    :before {
      value: 'Log In'
    } 
  }

  & span {
    text-align: center;
    text-decoration: none;
    color: inherit;
    font-size: 13px;
  }
`;
