import React from 'react';
import { ChatsWindow, ChatsWindowPlus, ChatsWindowMessage } from './ChatsStyles';

export default () => (
  <ChatsWindow>
    <ChatsWindowPlus>
      <i className="far fa-plus-square fa-lg" />
    </ChatsWindowPlus>
    <ChatsWindowMessage>
      <input type="text" placeholder="Write a message..." />
      <i className="far fa-smile-wink fa-lg" />
      <button type="button">
        <i className="fas fa-arrow-up" />
      </button>
    </ChatsWindowMessage>
  </ChatsWindow>
);
