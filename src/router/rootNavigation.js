// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME} from '../utils/routes';
import HomeScreen from '../screens/homeScreen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
