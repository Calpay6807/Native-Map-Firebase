import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from 'framer-motion';
import {AppColors} from '../../thema/appColor';

const CostumeButton = props => {
  const {title, disabled} = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={[
          {
            color: AppColors.WHITE,
            fontSize: 16,
            fontWeight: '500',
            padding: 10,
            borderRadius: 10,
          },
          {backgroundColor: disabled ? AppColors.GRAY : AppColors.GREEN},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CostumeButton;

const styles = StyleSheet.create({});
