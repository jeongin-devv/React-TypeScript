import React from 'react';
import {
  MoreSuggestions, MoreSuggestionsTitle,
  MoreSuggestionsIcons,
} from './MoreStyles';

import MoreSuggestionsIcon from './MoreSuggestionsIcon';

export default () => {
  const iconList = [
    {
      src: 'fas fa-quote-right',
      name: 'Kokoa Story',
    },
    {
      src: 'far fa-comment-alt fa-2x',
      name: 'Chat',
    },
  ];
  const title = 'Suggestions';
  return (
    <MoreSuggestions>
      <MoreSuggestionsTitle>{title}</MoreSuggestionsTitle>
      <MoreSuggestionsIcons>
        {iconList.map((icon) => (
          <MoreSuggestionsIcon iconType={icon} />
        ))}
      </MoreSuggestionsIcons>
    </MoreSuggestions>
  );
};
