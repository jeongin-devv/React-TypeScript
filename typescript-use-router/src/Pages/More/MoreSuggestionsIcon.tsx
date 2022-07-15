import React from 'react';
import {
  MoreSuggestionsIcon,
  MoreSuggestionsIconImage,
} from './MoreStyles';

export type IconType = {
  src: string;
  name: string;
};

interface Props {
  iconType: IconType;
}

export default ({ iconType } : Props) => (
  <MoreSuggestionsIcon>
    <MoreSuggestionsIconImage>
      <i className={iconType.src} />
    </MoreSuggestionsIconImage>
    <span>{iconType.name}</span>
  </MoreSuggestionsIcon>
);
