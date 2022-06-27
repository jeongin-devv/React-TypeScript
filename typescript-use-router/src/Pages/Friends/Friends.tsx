import React from 'react';
import { CommonWrap } from '../../Components/Common/CommonStyles';
import FriendsNotice from './FriendsNotice';
import FriendsProfile from './FriendsProfile';
import FriendsChannel from './FriendsChannel';
import FriendsList from './FriendsList';

const Friends = () => {
  const noticeText = 'Friends\' Names Display';
  const username = 'Zayden';
  const src = 'https://avatars3.githubusercontent.com/u/3612017';
  const friendsList = [
    {
      name: 'Jamie',
      src,
    },
    {
      name: 'Flynn',
      src,
    },
  ];
  return (
    <CommonWrap>
      <FriendsNotice noticeText={noticeText} />
      <FriendsProfile name={username} src={src} />
      <FriendsChannel count={3} src={src} />
      <FriendsList FriendsList={friendsList} />
    </CommonWrap>
  );
};

export default Friends;
