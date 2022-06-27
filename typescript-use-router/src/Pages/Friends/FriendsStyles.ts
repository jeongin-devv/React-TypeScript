import styled from 'styled-components';

export const FriendNoticeWrap = styled.div`
  text-align: center;
  display: block;
  background-color: #fafafa;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 15px;
  margin-top: -15px;

  & i {
    color: rgba(0, 0, 0, 0.3);
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const FriendChannelWrap = styled.div`
  margin-top: 25px;
  border-top: 1px solid gray;
  padding-top: 15px;
`;

export const FriendChannelHeader = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
`;

export const FriendsListDivider = styled.div`
  margin-bottom: 20px;
`;
