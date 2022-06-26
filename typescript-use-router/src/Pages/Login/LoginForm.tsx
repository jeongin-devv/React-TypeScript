import React from 'react';
import { LoginFormWrap } from './LoginStyles';

const LoginForm = () => {
  const {
    usernamePlaceholder, passwordPlaceholder,
    submitButtonName, loginFormText,
  } = {
    usernamePlaceholder: 'Email or phone number',
    passwordPlaceholder: 'Password',
    submitButtonName: 'Log In',
    loginFormText: 'Find KoKoa Account or Password',
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <LoginFormWrap onSubmit={submitHandler}>
      <input name="username" type="text" placeholder={usernamePlaceholder} />
      <input name="password" type="password" placeholder={passwordPlaceholder} />
      <input type="submit" value={submitButtonName} />
      <span>{loginFormText}</span>
    </LoginFormWrap>
  );
};

export default LoginForm;
