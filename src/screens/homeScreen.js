import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColors} from '../thema/appColor';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Notepad2} from 'iconsax-react-native';
import {ADDNOTE, NOTELİST} from '../utils/routes';
import FlatActionButton from '../components/ui/flatActionButton';
import {notes} from '../utils/mockData';
const {width, height} = Dimensions.get('window');

export default function HomeScreen(props) {
  const {navigation} = props;
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
        }}>
        {notes.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.region}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      <FlatActionButton {...props} />
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
