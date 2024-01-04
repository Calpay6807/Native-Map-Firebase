import {FlatList, StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import NoteCard from '../components/notes/noteCard';
import FlatActionButton from '../components/ui/flatActionButton';
import {notes} from '../utils/mockData';

const NoteList = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={notes}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />
        <FlatActionButton {...props} />
      </View>
    </SafeAreaView>
  );
};

export default NoteList;

const styles = StyleSheet.create({});
