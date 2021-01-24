import React from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

const ColorPreview = ({ onPress, themeName }) => {
  return (
    <View>
      <Text style={styles.text}> {themeName.paletteName}</Text>
      <FlatList
        horizontal={true}
        data={themeName.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item: { hexCode, colorName } }) => (
          <Button title=" " color={hexCode} onPress={onPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
});
export default ColorPreview;
