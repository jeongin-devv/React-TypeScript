import React from 'react';
import { FriendNoticeWrap } from './FriendsStyles';

type FriendNoticProps = {
  noticeText: string;
}

export default ({ noticeText } : FriendNoticProps) => {
  // const noticeText = 'Friends\' Names Display';

  const noticeEventHandler = (event:React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FriendNoticeWrap onClick={noticeEventHandler}>
      <i className="fas fa-info-circle" />
      {noticeText}
      <i className="fas fa-chevron-right fa-xs" />
    </FriendNoticeWrap>
  );
};
