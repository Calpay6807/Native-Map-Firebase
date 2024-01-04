import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EditNote = ({route}) => {
  const {id} = route?.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({});
