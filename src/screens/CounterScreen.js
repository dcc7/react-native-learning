import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  // let counter = 0;
  //we pass in the starting value into useState.
  //we cannot change our piece of state directly. We make reference to the
  //setCounter() function to make changes to our variable. (setter function)
  //when a component is rerendered all of its children get rerendered too.
  // we never directly modify a state variable. React doesn't detect this change!
  //Only use the 'setter' function.
  const [counter, setCounter] = useState(0);


  return (
    <View>
      <Button title="Increase" onPress={() => {
        setCounter(counter + 1);
        // console.log(counter);
      }}/>
      <Button title="Decrease" onPress={() => {
        setCounter(counter - 1);
        // console.log(counter);
      }}/>
        <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
