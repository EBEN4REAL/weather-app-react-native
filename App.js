import React from 'react';
// import CurrentWeather from './src/Screens/CurrentWeather';
// import UpcomingWeather from './src/Screens/UpcomigWeather';
// import City from './src/Screens/City';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Feather } from '@expo/vector-icons';
import TabNavigator from './src/components/tabs';

// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
