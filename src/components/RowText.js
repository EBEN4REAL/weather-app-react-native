import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    container,
    messageOneStyles,
    messageTwoStyles,
  } = props;

  return (
    <View style={[container]}>
      <Text style={[messageOneStyles, styles.messageOne]}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageOne: {
    marginRight: 5,
  },
});

export default RowText;
