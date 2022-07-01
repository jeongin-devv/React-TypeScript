import React from 'react';
import { CommonWrap } from '../../Components/Common/CommonStyles';
import SearchIconRow, { IconInfo } from './SearchIconRow';
import SearchRecommended from './SearchRecommended';

const iconList : IconInfo[] = [
  {
    name: 'QR Code',
    src: 'fas fa-qrcode',
  },
  {
    name: 'Add by Contacts',
    src: 'far fa-address-book',
  },
  {
    name: 'Add by ID',
    src: 'fas fa-fingerprint',
  },
  {
    name: 'Invite',
    src: 'far fa-envelope',
  },

];

const Search = () => (
  <CommonWrap>
    <SearchIconRow iconList={iconList} />
    <SearchRecommended />
  </CommonWrap>
);

export default Search;
