import React from 'react';

const LoginForm = () => {
  const loginFormText = 'Find KoKoa Account or Password';
  return (
    <form action="friends.html" method="get" id="login-form">
      <input name="username" type="text" placeholder="Email or phone number" />
      <input name="password" type="password" placeholder="Password" />
      <input type="submit" value="Log In" />
      <span>{loginFormText}</span>
    </form>
  );
};

export default LoginForm;
