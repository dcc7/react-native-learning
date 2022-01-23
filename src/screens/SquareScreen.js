import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";


const COLOR_INCREMENT = 15;


const SquareScreen = () => {

  const reducer = (state, action) => { //action: how should we change our state object.
    // state === { red: number, green: number, blue: number }
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    switch (action.colorToChange) {
      case 'red':
        
      case 'green':
      case 'blue':
      default:
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  console.log(state); // {red: 0, green: 0, blue: 0}



  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // console.log(red);

  // const setColor = (color, change) => {
  //
  //   switch (color){
  //     case 'red':
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case 'green':
  //       green + change > 255 || red + change < 0 ? null : setGreen(green + change);
  //       return;
  //     case 'blue':
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }

  // };


  return (
      <View>
        <ColorCounter
          onIncrease={() => }
          onDecrease={() => }
          color="Red"
        />
        <ColorCounter
          onIncrease={() => }
          onDecrease={() => }
          color="Green"/>
        <ColorCounter
          onIncrease={() => }
          onDecrease={() => }
          color="Blue"/>
        <View style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
          }}
        />
        </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
