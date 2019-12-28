import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';
import {inject, observer} from 'mobx-react';
import MapStore from '../stores/mapStore';

interface Props {
  mapStore?: MapStore;
}

@inject('store')
@observer
export default class MapScreen extends React.Component<Props> {
  public render() {
    const {mapStore} = this.props;
    return (
      <View style={styles.ViewStyle}>
        <MapView
          style={styles.MapViewStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        {/* <Text>{this.props.mapStore!.addMarkerBtnState}</Text> */}
        <Button title="asdf" onPress={mapStore!.setAddMarkerBtnState}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
  },
  MapViewStyle: {
    flex: 1,
  },
});
