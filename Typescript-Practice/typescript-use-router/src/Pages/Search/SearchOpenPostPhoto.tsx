import React from 'react';
import { SearchOpenPostPhoto, SearchOpenPostLike } from './SearchStyles';

export default () => {
  const likeCount = 326;
  return (
    <SearchOpenPostPhoto>
      <img src="https://avatars3.githubusercontent.com/u/3612017" alt="" />
      <SearchOpenPostLike>
        <i className="fas fa-heart fa-xs" /><span>{likeCount}</span>
      </SearchOpenPostLike>
    </SearchOpenPostPhoto>
  );
};
