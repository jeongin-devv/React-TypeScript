import { observable, action } from 'mobx';

export interface User{
  nickname: string;
  password: string;
}

interface UserStore { 
  isLoggedIn: boolean;
  data: User | null,
  logIn: (data: User) => void;
  logOut: () => void;
}

const userStore : UserStore = observable({
  isLoggedIn: false,
  data: null,
  logIn: action((data: User) => {
    userStore.isLoggedIn = true;
    setTimeout(action(() => {
      userStore.data = data;
      userStore.isLoggedIn = false;
      postStore.data.push('1');
    }),2000);
  }),
  logOut: action(() => {
    userStore.data = null;
  })
});

interface PostStore {
  data: string[];
  addPost: (data: string) => void;
}

const postStore = observable<PostStore>({
  data: [],
  addPost : action((data: string)=> {
    postStore.data.push(data);
  })
})

export { userStore, postStore }