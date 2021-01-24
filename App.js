import React from 'react';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Theme List' }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route: { params } }) => ({ title: params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
