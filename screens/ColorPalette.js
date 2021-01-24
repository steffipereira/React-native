import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route: { params } }) => {
  const { colors } = params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={colors}
          keyExtractor={({ hexCode }) => hexCode}
          renderItem={({ item: { colorName, hexCode } }) => (
            <ColorBox text={colorName} hexCode={hexCode} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default ColorPalette;
