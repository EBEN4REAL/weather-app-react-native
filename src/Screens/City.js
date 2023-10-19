import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const {
    container,
    populationText,
    cityText,
    populationWrapper,
    rowLayout,
    city,
    country,
    imageLayout,
    riseSetWrapper,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-4.jpeg')}
        style={imageLayout}
      >
        <Text style={[city, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={8000}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:58am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:28:pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  city: {
    fontSize: 30,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
