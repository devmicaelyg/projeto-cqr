import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from '../pages/PaginaInicial';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';

const { Navigator, Screen } = createStackNavigator();

const AppHome: React.FC = ()=> {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="PaginaInicial" component={PaginaInicial} />
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="RegisterPage" component={RegisterPage}/>
                <Screen name="MainPage" component={MainPage}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppHome;
