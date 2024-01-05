import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CostumeButton = props => {
  const {title} = props;
  return <Button {...props} title={title} />;
};

export default CostumeButton;

const styles = StyleSheet.create({});
