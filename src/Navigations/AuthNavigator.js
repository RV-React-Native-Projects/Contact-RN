import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import {LOGIN, SIGNUP} from '../Constants/RouteName';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
