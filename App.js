import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import MainNavigation from './src/navigation/main_navigation';

const App = () => {
  useEffect(() => SplashScreen.hide());
  return (
    < MainNavigation />
  );
};


export default App;


