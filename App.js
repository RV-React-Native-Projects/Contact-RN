import React from 'react';
import GlobalProvider from './src/Context/Provider';
import AppNavigation from './src/Navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <GlobalProvider>
        <AppNavigation />
      </GlobalProvider>
    </SafeAreaProvider>
  );
};

export default App;
