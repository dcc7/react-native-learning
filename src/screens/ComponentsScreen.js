import React from 'react';
import { Text, StyleSheet, View } from 'react-native'; //shows content on the mobile device.

const ComponentsScreen = () => {
  // const greeting = <Text>Hello to you</Text>
  const yourName = "Daniel";

  return (
    <View>
      <Text style={styles.textStyle}>Get started with React Native!</Text>
      <Text style={styles.textStyleSub}>My name is {yourName}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textStyleSub: {
    fontSize: 20
  },
});

export default ComponentsScreen;
