import React from 'react';
import {
  UserElementWrap,
  UserElementLeftColumn, UserElementRightColumn,
  UserElementImgXL, UserElementImgSm,
  UserElementName, UserElementNameNonBold,
} from './UserStyles';
import Badge from '../Common/Badge';

export interface User {
  type: 'Channel' | 'User' | 'Profile' | 'Chat';
  name: string;
  src: string;
  count: number | boolean;
  chatCount?: number;
  subtitle?: string;
}

const time = () => {
  const hour = parseInt(`${Math.random() * 24}`, 10);
  let minute : number | string = parseInt(`${Math.random() * 60}`, 10);
  if (Array.from(`${minute}`).length === 1) minute = `0${minute}`;
  return `${hour}:${minute}`;
};

const UserComponent = (
  {
    type, name, src, count, chatCount, subtitle,
  } : User,
) => (
  <UserElementWrap>
    <UserElementLeftColumn>
      { type === 'Profile'
        ? <UserElementImgXL src={src} />
        : <UserElementImgSm src={src} />}
      { type === 'Profile'
        ? (
          <UserElementName>
            <h4>{name}</h4>
            { subtitle ? <h6>{subtitle}</h6> : false}
          </UserElementName>
        )
        : (
          <UserElementNameNonBold>
            <h4>{name}</h4>
            { subtitle ? <h6>{subtitle}</h6> : false}
          </UserElementNameNonBold>
        )}
    </UserElementLeftColumn>
    <UserElementRightColumn>
      {count && <div><span>{count}</span><i className="fas fa-chevron-right fa-xs" /></div>}
      {type === 'Chat' && <span className="time">{time()}</span>}
      {chatCount ? <Badge count={chatCount} /> : false}
    </UserElementRightColumn>
  </UserElementWrap>
);

UserComponent.defaultProps = {
  chatCount: 0,
  subtitle: '',
};

export default UserComponent;
