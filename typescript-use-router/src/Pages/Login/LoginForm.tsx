import React from 'react';

const LoginForm = () => {
  const loginFormText = 'Find KoKoa Account or Password';
  const usernamePlaceholder = 'Email or phone number';
  const passwordPlaceholder = 'Password';
  const submitButtonName = 'Log In';

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <form action="friends.html" method="get" id="login-form" onSubmit={submitHandler}>
      <input name="username" type="text" placeholder={usernamePlaceholder} />
      <input name="password" type="password" placeholder={passwordPlaceholder} />
      <input type="submit" value={submitButtonName} />
      <span>{loginFormText}</span>
    </form>
  );
};

export default LoginForm;
