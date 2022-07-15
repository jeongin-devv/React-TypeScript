import React from 'react';
import {
  ChatsDetail, ChatsTimeStamp, ChatsMessage, ChatsMessageInfo,
  ChatsMessageAuthor, ChatsMessageBubble, ChatsMessageTime,
  ChatsMessageReply, ChatsMessageReplyInfo, ChatsMessageReplyBubble,
} from './ChatsStyles';

export default () => (
  <ChatsDetail>
    <ChatsTimeStamp>Tuesday, June 29, 2022</ChatsTimeStamp>
    <ChatsMessage>
      <img src="https://avatars3.githubusercontent.com/u/3612017" alt="asadf" />
      <div>
        <ChatsMessageAuthor>Nicolas</ChatsMessageAuthor>
        <ChatsMessageInfo>
          <ChatsMessageBubble>Hi !!</ChatsMessageBubble>
          <ChatsMessageTime>21:27</ChatsMessageTime>
        </ChatsMessageInfo>
      </div>
    </ChatsMessage>
    <ChatsMessageReply>
      <div>
        <ChatsMessageReplyInfo>
          <ChatsMessageTime>01:03</ChatsMessageTime>
          <ChatsMessageReplyBubble>No Hi</ChatsMessageReplyBubble>
        </ChatsMessageReplyInfo>
      </div>
    </ChatsMessageReply>
  </ChatsDetail>
);
