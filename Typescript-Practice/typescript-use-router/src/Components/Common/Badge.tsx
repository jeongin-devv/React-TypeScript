import React from 'react';
import { Badge } from './CommonStyles';

type BadgeProps = {
  count: number | undefined;
}

export default ({ count } : BadgeProps) => (
  <Badge>
    {count}
  </Badge>
);
