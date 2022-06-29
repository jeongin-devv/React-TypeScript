import styled, { keyframes } from 'styled-components';
import { CommonWrap } from '../../Components/Common/CommonStyles';

export default styled.div`
  margin-bottom: 20px;
`;

export const fadeIn = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`;

export const ChatsDetail = styled(CommonWrap)`
  background-color: skyblue;
  margin-top: -20px;
  display: flex;
  height:100vh;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.8s linear;  
`;

export const ChatsTimeStamp = styled.div`
  color: white;
  background-color: #92a4b2;
  padding: 15px;
  font-size: 14px;
  border-radius: 25px;
  margin-bottom: 25px;
`;

export const ChatsMessage = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const ChatsMessageReply = styled(ChatsMessage)`
  justify-content: flex-end;
`;

export const ChatsMessageInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ChatsMessageReplyInfo = styled.div`
  flex-direction: row-reverse;
`;

export const ChatsMessageTime = styled.span`
  opacity: 0.8;
  font-size: 14px;
`;

export const ChatsMessageAuthor = styled(ChatsMessageTime)`
  margin-bottom: 5px;
  display: block;
  text-align: left;
`;

export const ChatsMessageBubble = styled.span`
  background-color: white;
  padding: 13px;
  font-size: 18px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  margin-right: 5px;
`;

export const ChatsMessageReplyBubble = styled(ChatsMessageBubble)`
  background-color: yellow;
  border-top-right-radius: 0px;
  border-top-left-radius: 15px;
  margin-right: 0px;
  margin-left: 5px;
`;

export const ChatsWindow = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  box-sizing: border-box;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:focus-within {
    opacity: 0;
    transform: translateY(80px);
  }

  & i {
    opacity: 0.5;
  }

  & input {
    padding: 14px;
    width: 80%;
    margin-right:10px;
    border: 1px solid gray;
    border-radius: 25px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
  }

  & input:focus {
    width: 98vw;
    transform: translateX(-13%) translateY(-80px);
  }

  & button {
    background-color: yellow;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: opacity 0.3s ease-in-out;
  }

  & button:focus, button:active {
    outline:none;
  }

  & button i {
    opacity: 1;
  }

  & .fa-smile-wink {
    margin-right:10px;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const ChatsWindowPlus = styled.div`
  width: 10%;
  transition: opacity 0.3s ease-in-out;

  & i, button {
    // position: absolute;
    right: 3px;
    top: 3px;
  }
`;

export const ChatsWindowMessage = styled.div`
  width: 90%;
  position: relative
`;
