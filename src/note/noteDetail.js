import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NoteDetail = ({route}) => {
  const {item} = route?.params;
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({});
