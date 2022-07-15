import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  NavigationWrap, NavigationList,
  NavigationButton, NavigationAlarm,
} from './NavigationStyles';

export const menuList = [
  {
    key: 'friends',
    routeUrl: '/friends',
    isBadge: false,
    count: 1,
    defaultIcon: 'far fa-user fa-2x',
    activeIcon: 'fas fa-user fa-2x',
  },
  {
    key: 'chats',
    routeUrl: '/chats',
    isBadge: true,
    count: 1,
    defaultIcon: 'far fa-comment fa-2x',
    activeIcon: 'fas fa-comment fa-2x',
  },
  {
    key: 'search',
    routeUrl: '/search',
    isBadge: false,
    count: 1,
    defaultIcon: 'fas fa-search fa-2x',
    activeIcon: 'fas fa-search fa-2x',
  },
  {
    key: 'more',
    routeUrl: '/more',
    isBadge: false,
    count: 1,
    defaultIcon: 'fas fa-ellipsis-h fa-2x',
    activeIcon: 'fas fa-ellipsis-h fa-2x',
  },
];

const Navigation = () => {
  const location = useLocation().pathname;
  return (
    <NavigationWrap>
      <NavigationList>
        {menuList.map((menu) => (
          <NavigationButton key={menu.key}>
            <NavLink to={menu.routeUrl}>
              {menu.isBadge && <NavigationAlarm count={1} />}
              <i className={location.includes(menu.key) ? menu.activeIcon : menu.defaultIcon} />
            </NavLink>
          </NavigationButton>
        ))}
      </NavigationList>
    </NavigationWrap>
  );
};

export default Navigation;
