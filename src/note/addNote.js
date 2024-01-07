import {StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import CostumeInputText from '../components/ui/textInput';
import CostumeButton from '../components/ui/costumeButton';

const AddNote = ({route}) => {
  const {cordinate} = route?.params;
  const [title, setTitle] = useState(null);
  const [descrptions, setDescrption] = useState(null);

  const handeSaveNote = () => {
    const form = {
      title: title,
      descrptions: descrptions,
      region: cordinate,
    };
    console.log(form);
  };

  return (
    <View>
      <CostumeInputText
        placeHolder={'Tittle Area'}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <CostumeInputText
        placeHolder={'Description Area'}
        value={descrptions}
        onChangeText={text => setDescrption(text)}
      />
      <CostumeButton
        disabled={!title || !descrptions}
        title={'Kaydet'}
        onPress={handeSaveNote}
      />
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
