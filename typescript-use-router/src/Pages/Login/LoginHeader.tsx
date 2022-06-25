import React from 'react';
import { LoginHeaderWrap, LoginHeaderTitle, LoginHeaderText } from './LoginStyles';

const LoginHeader = () => {
  const headerTitle = 'Welcome to KoKoa Clone';
  const headerText = 'If you have a Kokoa Account, log in with your email or phone number.';
  return (
    <LoginHeaderWrap>
      <LoginHeaderTitle
        contents={headerTitle}
      />
      <LoginHeaderText
        contents={headerText}
      />
    </LoginHeaderWrap>
  );
};

export default LoginHeader;
