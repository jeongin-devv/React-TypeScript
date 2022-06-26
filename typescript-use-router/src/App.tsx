import React from 'react';
import { useLocation } from 'react-router-dom';
// import Index from './Pages/Login/Login';
import RootRouter from './Router/RootRouter';
import Screening from './Components/Screening/Screening';
import StatusBar from './Components/StatusBar/StatusBar';
import Navigation from './Components/Navigation/Navigation';
import ScreenHeader from './Components/ScreenHeader/ScreenHeader';
import './App.css';

type NavigationState = boolean;

const menuList = ['/friends', '/chats', '/search', '/more'];

const App = () => {
  const [navigationState, setNavigationState] = React.useState<NavigationState>(true);
  const [screenHeaderState, setScreenHeaderState] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    const { pathname } = location;
    setNavigationState(pathname !== '/');
    setScreenHeaderState(menuList.includes(pathname));
  }, [location]);

  return (
    <div className="App">
      <StatusBar />
      {screenHeaderState && <ScreenHeader title={location.pathname} />}
      <RootRouter />
      <Screening />
      {navigationState && <Navigation />}
    </div>
  );
};

export default App;
