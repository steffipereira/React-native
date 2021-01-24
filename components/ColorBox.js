import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ColorBox = ({ text, hexCode }) => {
  const color = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, color]}>
      <Text style={textColor}>
        {text} : {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorBox;
