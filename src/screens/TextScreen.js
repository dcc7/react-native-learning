import React from 'react';
import { TextInput ,View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {

  return (
    <View>
      <TextInput
        placeholder="hello"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value="hi there"
      />
    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }

});

export default TextScreen;
