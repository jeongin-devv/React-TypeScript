import React from 'react';
import { FriendsWrap } from './FriendsStyles';
import FriendsNotice from './FriendsNotice';
import FriendsProfile from './FriendsProfile';

const Friends = () => {
  const noticeText = 'Friends\' Names Display';
  const username = 'Zayden';
  const src = 'https://avatars3.githubusercontent.com/u/3612017';
  return (
    <FriendsWrap>
      <FriendsNotice noticeText={noticeText} />
      <FriendsProfile username={username} src={src} />
    </FriendsWrap>
  );
};

export default Friends;
