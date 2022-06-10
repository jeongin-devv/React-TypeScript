import * as React from 'react';
import { useCallback } from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { action } from 'mobx';
import { postStore, userStore } from './Store';

interface LocalStore {
  name: string;
  password: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const App = () => {
  const state = useLocalStore(()=> ({
    name: '',
    password: '',
    onChangeName: action(function onChangeName(this: LocalStore, e: React.ChangeEvent<HTMLInputElement>) {
      this.name = e.target.value;
      userStore.isLoggedIn = false;
    }),
    onChangePassword: action(function onChangePassword(this: LocalStore, e: React.ChangeEvent<HTMLInputElement>) {
      this.password = e.target.value;
    }),
  }));

  const onLogIn = useCallback(() => {
    userStore.logIn({
      nickname: state.name,
      password: state.password,
    });
  }, [state.name, state.password]);

  const onLogOut = useCallback(() => {
    userStore.logOut();
  }, []);

  return useObserver(() => (
    <div>
      {userStore.isLoggedIn
        ? <div>로그인 중</div>
        : userStore.data
          ? <div>{userStore.data.nickname}</div>
          : '로그인 해주세요.'}
      {!userStore.data
        ? <button onClick={onLogIn}>로그인</button>
        : <button onClick={onLogOut}>로그아웃</button>}
      {postStore.data.length}
      <div>
        <input value={state.name} onChange={state.onChangeName} />
        <input value={state.password} type="password" onChange={state.onChangePassword} />
      </div>
    </div>
  ));
}

export default App;