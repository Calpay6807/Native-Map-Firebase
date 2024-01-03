// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, HOME, NOTELİST} from '../utils/routes';
import HomeScreen from '../screens/homeScreen';
import AddNote from '../note/addNote';
import NoteList from '../note/noteList';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerBackTitle: 'Geri'}}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen
        options={{headerShown: true}}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={NOTELİST}
        component={NoteList}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
