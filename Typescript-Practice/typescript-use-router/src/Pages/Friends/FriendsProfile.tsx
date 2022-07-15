import React from 'react';
import FriendsProfile from '../../Components/User/User';

export type ProfileProps = {
  name:string;
  src:string;
}

export default ({ name, src } : ProfileProps) => (
  <FriendsProfile
    type="Profile"
    count={0}
    name={name}
    src={src}
  />
);
