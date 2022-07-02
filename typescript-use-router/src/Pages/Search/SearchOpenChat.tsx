import React from 'react';
import { SearchOpenChat } from './SearchStyles';

import SearchOpenChatHeader from './SearchOpenChatHeader';
import SearchOpenPost from './SearchOpenPost';

export default () => (
  <SearchOpenChat>
    <SearchOpenChatHeader />
    <SearchOpenPost />
  </SearchOpenChat>
);
