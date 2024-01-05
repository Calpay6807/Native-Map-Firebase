import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../thema/appColor';
import MapView, {Marker} from 'react-native-maps';
import {
  ArrowCircleDown2,
  ArrowLeft3,
  ArrowRight,
  ArrowRight3,
  Map,
  Notepad2,
} from 'iconsax-react-native';
import {ADDNOTE} from '../../utils/routes';
import CostumeMarker from '../../components/maps/costume-marker';

const {width, height} = Dimensions.get('window');

export default function SelecetCordinate(props) {
  const {navigation} = props;
  const [cordinates, setCordinate] = useState([]);
  const [mapTypes, setMapType] = useState('hybrid');
  const changeMapType = () => {
    try {
      if (mapTypes === 'standard') setMapType('hybrid');
      else setMapType('standard');
    } catch (error) {
      console.error('MapType değiştirilirken hata oluştu:', error);
    }
  };
  const handleSetCordinates = region => {
    if (cordinates.length == 0) setCordinate([...cordinates, region]);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <View style={{zIndex: 999}}>
        <TouchableOpacity
          onPress={() => changeMapType()}
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
            zIndex: 99,
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
          <Map size={40} color={AppColors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            cordinates.length == 0
              ? null
              : navigation.navigate(ADDNOTE, {cordinate: cordinates})
          }
          style={{
            position: 'absolute',
            right: 10,
            zIndex: 99,
            top: 20,
            width: width * 0.18,
            height: height * 0.08,
            backgroundColor:
              cordinates.length == 0 ? AppColors.GRAY : AppColors.WHITE,
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
          <ArrowRight size={40} color={AppColors.BLACK} />
        </TouchableOpacity>
      </View>
      <MapView
        onRegionChange={region => handleSetCordinates(region)}
        mapType={mapTypes}
        zoomControlEnabled={false}
        initialRegion={{
          latitude: 38.3607712,
          longitude: 33.9182163,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        {...cordinates.map((marker, index) => (
          <Marker key={index} coordinate={marker.region}>
            <CostumeMarker />
          </Marker>
        ))}
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}></MapView>
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
