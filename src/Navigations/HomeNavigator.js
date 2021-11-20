import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../Screens/Contact/Contact';
import Home from '../Screens/Home/Home';
import CreateContact from '../Screens/CreateContact/CreateContact';
import ContactDetail from '../Screens/ContactDetail/ContactDetail';
import Settings from '../Screens/Settings/Settings';
import {
  CONTACT,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  HOME,
  SETTINGS,
} from '../Constants/RouteName';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={HOME}>
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen name={CONTACT} component={Contact} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
