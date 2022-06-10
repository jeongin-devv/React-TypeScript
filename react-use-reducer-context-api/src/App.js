import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // // 의존성이 변동된 경우에만 실행 된다.
  // // dependency mutation
  // useEffect(() =>{
  //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  //   if(storedUserLoggedInInformation === '1 '){
  //     setIsLoggedIn(true);
  //   }
  // },[]);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (
    //Context에 변수 할당
      // <AuthContext.Provider 
      //   value={{
      //     isLoggedIn: isLoggedIn,
      //     onLogout: logoutHandler
      //   }}
      // >
      // <>
      // <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      //   <main>
      //     {!isLoggedIn && <Login onLogin={loginHandler} />}
      //     {isLoggedIn && <Home onLogout={logoutHandler} />}
      //   </main>
      // </>
      // </AuthContext.Provider>

      <>
      <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </>
  );
}

export default App;
