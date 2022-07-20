/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Layout, Sidebar } from 'react-admin';

const CustomSidebar = (props : any) => <Sidebar {...props} size={200} />;
const CustomLayout = (props : any) => <Layout {...props} sidebar={CustomSidebar} />;

export default CustomLayout;
