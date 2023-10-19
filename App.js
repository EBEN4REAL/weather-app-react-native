import React from 'react';
import CurrentWeather from './src/Screens/CurrentWeather';
import { View, StyleSheet } from 'react-native';
import UpcomingWeather from './src/Screens/UpcomigWeather';
import City from './src/Screens/City';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <City /> */}
      <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
