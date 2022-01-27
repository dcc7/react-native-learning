import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  // let counter = 0;
  //we pass in the starting value into useState.
  //we cannot change our piece of state directly. We make reference to the
  //setCounter() function to make changes to our variable. (setter function)
  //when a component is rerendered all of its children get rerendered too.
  // we never directly modify a state variable. React doesn't detect this change!
  //Only use the 'setter' function.
  // const [counter, setCounter] = useState(0);

  const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }

    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload };
      case 'decrement':
        if (state.count > 0) {
        return { ...state, count: state.count - action.payload };
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })


  return (
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({ type: 'increment', payload: 1 })
      }}/>
      <Button title="Decrease" onPress={() => {
        dispatch({ type: 'decrement', payload: 1 })
      }}/>
        <Text>Current Count: { state.count }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
