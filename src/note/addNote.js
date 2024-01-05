import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CostumeInputText from '../components/ui/textInput';
import CostumeButton from '../components/ui/costumeButton';

const AddNote = ({route}) => {
  const {cordinate} = route?.params;
  const [title, setTitle] = useState('');
  const [descrptions, setDescrption] = useState('');

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
      <CostumeButton title={'Gönder'} onPress={() => console.log(title)} />
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
