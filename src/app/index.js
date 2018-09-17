import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../login'
import HomeScreen from './homeScreen';
import AuthLoadingScreen from '../login/authLoadingScreen'


const AppStack  = createStackNavigator({ Home: HomeScreen, Other: Login });
const AuthStack = createStackNavigator({ SignIn: Login });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
