import React from 'react';
import { ScreeningWrap } from './ScreeningStyles';

const Screening = () => {
  const screeningText = 'Only mobile sizes are supported';
  return (
    <ScreeningWrap screeningText={screeningText} />
  );
};

export default Screening;
