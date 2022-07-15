import React from 'react';
import { CommonIconRow, CommonIconComponent } from '../../Components/Common/CommonStyles';

export type IconInfo = {
  name:string;
  src:string;
}
interface Props {
  iconList: IconInfo[];
}

export default ({ iconList }: Props) => (
  <CommonIconRow>
    {iconList.map((icon) => (
      <CommonIconComponent>
        <i className={icon.src} />
        <span>{icon.name}</span>
      </CommonIconComponent>
    ))}
  </CommonIconRow>
);
