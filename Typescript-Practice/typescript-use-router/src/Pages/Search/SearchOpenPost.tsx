import React from 'react';
import {
  SearchOpenPost, SearchOpenPostColumn,
} from './SearchStyles';

import SearchOpenPostTitle from './SearchOpenPostTitle';
import SearchOpenPostHashtag from './SearchOpenPostHashtag';
import SearchOpenPostInfo from './SearchOpenPostInfo';
import SearchOpenPostPhoto from './SearchOpenPostPhoto';

export default () => (
  <SearchOpenPost>
    <SearchOpenPostColumn>
      <SearchOpenPostTitle />
      <SearchOpenPostHashtag />
      <SearchOpenPostInfo />
    </SearchOpenPostColumn>
    <SearchOpenPostColumn>
      <SearchOpenPostPhoto />
    </SearchOpenPostColumn>
  </SearchOpenPost>
);
