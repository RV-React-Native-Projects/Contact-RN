import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../Context/Provider';

const AppNavigation = () => {
  const {
    authState: {isLoggedin},
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {isLoggedin ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
