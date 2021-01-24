import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorPreview from '../components/ColorPreview';
import { useState, useCallback, useEffect } from 'react';

const Home = ({ navigation }) => {
  const [themes, setThemeNames] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

  const handleFetchThemes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const themeList = await response.json();
      setThemeNames(themeList);
    }
  }, []);

  const handleScreenRefresh = useCallback(async () => {
    setRefresh(true);
    await handleFetchThemes;
    setRefresh(false);
  }, []);

  useEffect(() => {
    handleFetchThemes();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Here are some of my favorite themes</Text>
      <FlatList
        data={themes.slice(3)}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <ColorPreview
            onPress={() => navigation.navigate('ColorPalette', item)}
            themeName={item}
          />
        )}
        refreshing={refresh}
        onRefresh={handleScreenRefresh}
      />
    </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Home;
