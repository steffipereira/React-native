import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Switch,
  FlatList,
  Button,
  Alert,
} from 'react-native';
import { useState, useCallback } from 'react';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
  { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
  { colorName: 'Azure', hexCode: '#F0FFFF' },
  { colorName: 'Beige', hexCode: '#F5F5DC' },
  { colorName: 'Bisque', hexCode: '#FFE4C4' },
  { colorName: 'Black', hexCode: '#000000' },
  { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
  { colorName: 'Blue', hexCode: '#0000FF' },
  { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
  { colorName: 'Brown', hexCode: '#A52A2A' },
  { colorName: 'BurlyWood', hexCode: '#DEB887' },
  { colorName: 'CadetBlue', hexCode: '#5F9EA0' },
  { colorName: 'Chartreuse', hexCode: '#7FFF00' },
  { colorName: 'Chocolate', hexCode: '#D2691E' },
  { colorName: 'Coral', hexCode: '#FF7F50' },
  { colorName: 'CornflowerBlue', hexCode: '#6495ED' },
  { colorName: 'Cornsilk', hexCode: '#FFF8DC' },
  { colorName: 'Crimson', hexCode: '#DC143C' },
  { colorName: 'Cyan', hexCode: '#00FFFF' },
  { colorName: 'DarkBlue', hexCode: '#00008B' },
  { colorName: 'DarkCyan', hexCode: '#008B8B' },
  { colorName: 'DarkGoldenRod', hexCode: '#B8860B' },
  { colorName: 'DarkGray', hexCode: '#A9A9A9' },
  { colorName: 'DarkGrey', hexCode: '#A9A9A9' },
  { colorName: 'DarkGreen', hexCode: '#006400' },
  { colorName: 'DarkKhaki', hexCode: '#BDB76B' },
  { colorName: 'DarkMagenta', hexCode: '#8B008B' },
  { colorName: 'DarkOliveGreen', hexCode: '#556B2F' },
  { colorName: 'Darkorange', hexCode: '#FF8C00' },
  { colorName: 'DarkOrchid', hexCode: '#9932CC' },
  { colorName: 'DarkRed', hexCode: '#8B0000' },
  { colorName: 'DarkSalmon', hexCode: '#E9967A' },
];

const AddNewThemeModal = ({ navigation }) => {
  const [name, onChangeText] = useState('');
  const [selectedColor, setSelectedColor] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please provide theme name');
    } else if (selectedColor.length < 5) {
      Alert.alert('Please choose 5 colors to create a theme');
    } else {
      const newTheme = {
        paletteName: name,
        colors: selectedColor,
      };
      navigation.navigate('Home', { newTheme });
    }
  }, [name, selectedColor]);

  const handleSelectedColor = useCallback((value, color) => {
    if (value) {
      setSelectedColor((colors) => [...colors, color]);
    } else {
      setSelectedColor((colors) =>
        colors.filter(
          (currentColor) => color.colorName !== currentColor.colorName,
        ),
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Your new theme name</Text>
      <TextInput
        style={styles.input}
        placeholder="Theme Name"
        value={name}
        onChangeText={onChangeText}
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View>
            <View style={styles.list}>
              <View style={[styles.box, { backgroundColor: item.hexCode }]} />
              <Switch
                value={
                  !!selectedColor.find(
                    (color) => color.colorName === item.colorName,
                  )
                }
                onValueChange={(selected) => {
                  handleSelectedColor(selected, item);
                }}
              />
            </View>
          </View>
        )}
      />
      <Button title="Submit" color="green" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 40,
    color: 'white',
    fontSize: 15,
    backgroundColor: 'green',
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ddd',
  },
  box: {
    paddingHorizontal: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default AddNewThemeModal;
