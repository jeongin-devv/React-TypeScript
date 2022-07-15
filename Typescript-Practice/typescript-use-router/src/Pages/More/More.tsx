import React from 'react';
import { CommonWrap } from '../../Components/Common/CommonStyles';
import MoreIconRow, { IconInfo } from './MoreIconRow';
import MoreSuggestions from './MoreSuggestions';

export default () => {
  const iconList : IconInfo[] = [
    {
      name: 'Calendar',
      src: 'far fa-calendar',
    },
    {
      name: 'Emoticons',
      src: 'far fa-smile-beam',
    },
    {
      name: 'Themes',
      src: 'fas fa-paint-roller',
    },
    {
      name: 'Account',
      src: 'fas fa-file-invoice-dollar',
    },
  ];
  return (
    <CommonWrap>
      <MoreIconRow iconList={iconList} />
      <MoreSuggestions />
    </CommonWrap>
  );
};
