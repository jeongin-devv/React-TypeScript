import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Chat from '../../Components/User/User';
import ChatsDivider from './ChatsStyles';
import { CommonWrap } from '../../Components/Common/CommonStyles';

export default () => {
  const ChatList = [
    {
      key: '322',
      name: 'Zayden',
      src: 'https://avatars3.githubusercontent.com/u/3612017',
      chatCount: 1,
      subtitle: 'How are you?',
    },
    {
      key: '112',
      name: 'Flynn',
      src: 'https://avatars3.githubusercontent.com/u/3612017',
      chatCount: 0,
      subtitle: 'What are you doing now? You Crazy?',
    },
  ];

  return (
    <CommonWrap>
      {ChatList.map((chat) => (
        <ChatsDivider key={chat.key}>
          <Link to={`/chatsdetail/${chat.key}`}>
            <Chat
              type="Chat"
              name={chat.name}
              src={chat.src}
              count={false}
              chatCount={chat.chatCount}
              subtitle={chat.subtitle}
            />
          </Link>
        </ChatsDivider>
      ))}
      <Outlet />
    </CommonWrap>
  );
};
