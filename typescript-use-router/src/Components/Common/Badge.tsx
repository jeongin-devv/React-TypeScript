import React from 'react';
import BadgeWrap from './BadgeStyles';

type BadgeProps = {
  count: number;
}

const Badge = ({ count } : BadgeProps) => (
  <BadgeWrap>
    {count}
  </BadgeWrap>
);

export default Badge;
