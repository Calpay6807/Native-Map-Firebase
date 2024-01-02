import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../thema/appColor';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.WHITE,
  },
});
