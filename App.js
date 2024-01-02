// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import {HOME} from './src/utils/routes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
