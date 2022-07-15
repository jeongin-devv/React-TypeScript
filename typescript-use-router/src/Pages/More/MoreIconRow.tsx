import React from 'react';
import { CommonIconComponent } from '../../Components/Common/CommonStyles';
import { MoreIconRow } from './MoreStyles';

export type IconInfo = {
  name:string;
  src:string;
}

interface Props {
  iconList: IconInfo[];
}

export default ({ iconList } : Props) => (
  <MoreIconRow>
    {iconList.map((icon) => (
      <CommonIconComponent>
        <i className={icon.src} />
        <span>{icon.name}</span>
      </CommonIconComponent>
    ))}
  </MoreIconRow>
);
