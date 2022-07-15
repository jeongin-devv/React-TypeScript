import React from 'react';
import { SearchRecommended, SearchRecommendedTitle, SearchRecommendedContents } from './SearchStyles';

export default () => (
  <SearchRecommended>
    <SearchRecommendedTitle>
      Recommended Friends
    </SearchRecommendedTitle>
    <SearchRecommendedContents>
      You have no recommended friends.
    </SearchRecommendedContents>
  </SearchRecommended>
);
