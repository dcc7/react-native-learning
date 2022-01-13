import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 20 },
    { name: 'Friend 2', age: 25 },
    { name: 'Friend 3', age: 30 },
    { name: 'Friend 4', age: 35 },
    { name: 'Friend 5', age: 40 },
  ];

  //in react.js we use mapping but react native utilises FlatList.
  return (
    <FlatList
      vertical //samething as writing horizontal = {true};
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name } //without a key react native will delete the entire list and then rebuild the entire list with the new change. With a unique key it does not need to rebuild the entire list again. Allows react native to track each item. (Performance Optimisation).
      data={friends}
      renderItem={({ item }) => { //we are destructuring the objects out from the list.
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 20
  }
});

export default ListScreen;
