import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddNote = ({route}) => {
  const {cordinate} = route?.params;
  console.log(cordinate);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
