import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';

import styles from './style';
import MainPage from '../../pages/MainPage';
import PaginaInicial from '../../pages/PaginaInicial';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator >
      {/* <Tab.Screen name="MainPage" component={MainPage} /> */}
      <Tab.Screen name="LoginPage" component={LoginPage} />
      <Tab.Screen name="RegisterPage" component={RegisterPage} />
      <Tab.Screen name="PaginaInicial" component={PaginaInicial} />
    </Tab.Navigator>
  );
}

export default MyTabs;