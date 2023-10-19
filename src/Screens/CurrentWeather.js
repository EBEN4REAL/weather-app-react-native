import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>10</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 6'}
          messageTwo={'Low: 3'}
          container={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={'Its sunny'}
        messageTwo={'Its perfect t-shirt weather'}
        container={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  temp: {
    fontSize: 48,
    color: 'black',
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
  highLow: {
    fontSize: 18,
  },
});
