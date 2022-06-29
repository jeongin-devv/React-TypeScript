import React, { useState } from 'react';
import { LoginFormWrap } from './LoginStyles';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    usernamePlaceholder, passwordPlaceholder,
    submitButtonName, loginFormText,
  } = {
    usernamePlaceholder: 'Email or phone number',
    passwordPlaceholder: 'Password',
    submitButtonName: 'Log In',
    loginFormText: 'Find KoKoa Account or Password',
  };

  const usernameHandler = ({ target } : React.ChangeEvent<HTMLInputElement>) => (
    setUsername(target.value)
  );

  const passwordHandler = ({ target } : React.ChangeEvent<HTMLInputElement>) => (
    setPassword(target.value)
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // eslint-disable-next-line no-useless-escape
    // const regEmail
    // = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  };

  return (
    <LoginFormWrap onSubmit={submitHandler}>
      <input
        name="username"
        type="text"
        placeholder={usernamePlaceholder}
        value={username}
        onChange={usernameHandler}
      />
      <input
        name="password"
        type="password"
        placeholder={passwordPlaceholder}
        value={password}
        onChange={passwordHandler}
      />
      <input type="submit" value={submitButtonName} />
      <span>{loginFormText}</span>
    </LoginFormWrap>
  );
};

export default LoginForm;
