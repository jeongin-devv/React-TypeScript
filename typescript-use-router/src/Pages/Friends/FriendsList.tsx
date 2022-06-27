import React from 'react';
import { FriendChannelWrap, FriendChannelHeader, FriendsListDivider } from './FriendsStyles';
import FriendsChannel from '../../Components/User/User';

type Props = {
  FriendsList : {
    name: string;
    src: string;
  }[]
}

export default ({ FriendsList } : Props) => (
  <FriendChannelWrap>
    <FriendChannelHeader>
      <span>Friends</span>
      <span>{FriendsList.length}</span>
    </FriendChannelHeader>
    {FriendsList.map(({ name, src }) => (
      <FriendsListDivider key={name}>
        <FriendsChannel
          type="User"
          name={name}
          count={false}
          src={src}
        />
      </FriendsListDivider>
    ))}
  </FriendChannelWrap>
);
