import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ColorPreview from '../components/ColorPreview';
import { useState, useCallback, useEffect } from 'react';

const Home = ({ navigation, route }) => {
  const newColorTheme = route.params ? route.params.newTheme : undefined;
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

  useEffect(() => {
    if (newColorTheme) {
      setThemeNames((theme) => [newColorTheme, ...theme]);
    }
  }, [newColorTheme]);

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
      <TouchableOpacity onPress={() => navigation.navigate('AddNewThemeModal')}>
        <Text style={styles.text}>+ New theme</Text>
      </TouchableOpacity>
      <FlatList
        data={themes}
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
  text: {
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 40,
    color: 'white',
    fontSize: 15,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Home;
