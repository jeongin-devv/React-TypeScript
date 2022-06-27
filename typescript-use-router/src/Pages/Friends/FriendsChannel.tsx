import React from 'react';
import { FriendChannelWrap, FriendChannelHeader } from './FriendsStyles';
import FriendsChannel from '../../Components/User/User';

type ChannelProps = {
  count: number | boolean;
  src: string;
}

export default ({ count, src } : ChannelProps) => (
  <FriendChannelWrap>
    <FriendChannelHeader>
      <span>Channel</span>
      <i className="fas fa-chevron-up fa-xs" />
    </FriendChannelHeader>
    <FriendsChannel
      type="Channel"
      name="Channel"
      count={count}
      chatCount={0}
      src={src}
    />
  </FriendChannelWrap>
);
