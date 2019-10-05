/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './Pages/SplashScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
import CategoriesNavbar from './Components/CategoriesNavbar';

const AppNavigator = createSwitchNavigator({
  SplashScreen: {screen: SplashScreen},
  Categories: {screen: Categories},
  Products: {screen: Products},
  CategoriesNavbar: {screen: CategoriesNavbar}
});
//export default createAppContainer(AppNavigator);

const InitialNavigator = createSwitchNavigator({
  //Splash: {screen:SplashScreen},
  App: AppNavigator
});

//export default createAppContainer(InitialNavigator);

const App =createAppContainer(InitialNavigator);

export default App;
