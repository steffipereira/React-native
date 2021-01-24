import React from 'react';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewThemeModal from './screens/AddNewThemeModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Theme List' }}
      />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route: { params } }) => ({ title: params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddNewThemeModal"
          component={AddNewThemeModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
