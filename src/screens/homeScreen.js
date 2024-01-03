import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../thema/appColor';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View>
      <StatusBar hidden />
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.WHITE,
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    width: width * 1,
    height: height * 1,
    ...StyleSheet.absoluteFillObject,
  },
});
