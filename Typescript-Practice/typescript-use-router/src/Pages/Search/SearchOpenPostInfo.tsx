import React from 'react';
import {
  SearchOpenPostMembers, SearchOpenPostMembersCount,
  SearchOpenPostMembersDivider, SearchOpenPostMembersStatus,
} from './SearchStyles';

export default () => {
  const memberCount = 802;
  const memberStatus = 'Active';
  return (
    <SearchOpenPostMembers>
      <img src="https://avatars3.githubusercontent.com/u/3612017" alt="" />
      <SearchOpenPostMembersCount>{memberCount} members</SearchOpenPostMembersCount>
      <SearchOpenPostMembersDivider />
      <SearchOpenPostMembersStatus>{memberStatus}</SearchOpenPostMembersStatus>
    </SearchOpenPostMembers>
  );
};
