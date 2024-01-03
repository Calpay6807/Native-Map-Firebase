import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColors} from '../thema/appColor';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {AddCircle, Additem, Note1, Notepad2} from 'iconsax-react-native';
import {ADDNOTE, NOTELİST} from '../utils/routes';
const {width, height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <View style={{position: 'absolute', top: 100, left: 10, zIndex: 999}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NOTELİST)}
          style={{
            width: width * 0.18,
            height: height * 0.08,
            backgroundColor: AppColors.WHITE,
            borderRadius: 200,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <Notepad2 size={40} color={AppColors.BLACK} />
        </TouchableOpacity>
      </View>
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <View style={{position: 'absolute', bottom: 30, right: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ADDNOTE)}
          style={{
            width: width * 0.18,
            height: height * 0.08,
            backgroundColor: AppColors.BEJ,
            borderRadius: 200,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <Additem size={40} color={AppColors.BLACK} />
        </TouchableOpacity>
      </View>
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
