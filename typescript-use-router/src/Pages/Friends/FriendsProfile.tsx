import React from 'react';
import {
  UserElementWrap,
  UserElementLeftColumn, UserElementRightColumn,
  UserElementImgXL, UserElementName,
} from '../../Components/User/User';

export type UserElementProps = {
  username:string;
  src:string;
}

export default ({ username, src } : UserElementProps) => (
  <UserElementWrap>
    <UserElementLeftColumn>
      <UserElementImgXL src={src} />
      <UserElementName>
        <h4>{username}</h4>
      </UserElementName>
    </UserElementLeftColumn>
    <UserElementRightColumn />
  </UserElementWrap>
);
