import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  // const [] = useState([]);
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
          // console.log(colors);
          // take a copy of everything in the array and add it to the new one specified.
          // then we are going to add a new entry calling setRgb.
        }}
      />

      <FlatList
        keyExtractor={(item) => item }
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  )
};

//defining a function for the background color.
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const style = StyleSheet.create({});

export default ColorScreen;
