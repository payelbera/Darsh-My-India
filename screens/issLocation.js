import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import firebase from 'firebase';
import db from '../config';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';

import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/BubblegumSans-Regular.ttf'),
};

export default class IssScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      location: {},
      fontsLoaded: false,
      previewImage: 'image_1',
      light_theme: true,
      dropdownHeight: 40,

      state_name: '',
      state_capital: '',
      state_cm: '',
      state_places_to_visit: {},
    };
  }

  showDetails = async (item) => {
    alert('state choosen is ' + item);

    try {
      const stateref = await db
        .collection('states')
        .where('ID', '==', item)
        .get();
      console.log(stateref.docs.length);
      var chosen_state = null;
      stateref.docs.map((doc) => {
        chosen_state = doc.data();
        console.log('CM is ' + chosen_state.lat);
      });
      console.log('CM now is ' + chosen_state.long);
      this.setState({
        state_name: chosen_state.name,
        state_cm: chosen_state.cm,
        state_capital: chosen_state.capital,
        state_places_to_visit: chosen_state.places_to_visit,
        location: chosen_state.Location,
      });
    } catch (e) {
      console.log(e);
    }
  };

  
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
 render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleTextLight}>MY INDIA</Text>
        </View>
        <View>
          <DropDownPicker
            items={[
              { label: 'Andhra Pradesh', value: 'st001' },
              { label: 'Arunachal Pradesh', value: 'st002' },
              { label: 'assam', value: 'st003' },
              { label: 'bihar', value: 'st004' },
              { label: 'Chhattisgarh ', value: 'st005' },
              { label: 'Goa ', value: 'st006' },
              { label: 'Gujarat ', value: 'st007' },
              { label: 'Haryana ', value: 'st008' },
              { label: 'Himachal ', value: 'st009' },
              { label: 'Jammu ', value: 'st0010' },
              { label: 'Jharkhand  ', value: 'st0011' },
              { label: 'Karnataka ', value: 'st0012' },
              { label: 'Kerala ', value: 'st0013' },
              { label: 'Madhya ', value: 'st0014' },
              { label: 'Maharashtra ', value: 'st0015' },
              { label: 'Manipur ', value: 'st0016' },
              { label: 'Meghalaya ', value: 'st0017' },
              { label: 'Mizoram ', value: 'st0018' },
              { label: 'Nagaland ', value: 'st0019' },
              { label: 'Odisha', value: 'st0020' },
              { label: 'Punjab', value: 'st0021' },
              { label: 'Rajasthan ', value: 'st0022' },
              { label: 'Sikkim ', value: 'st0023' },
              { label: 'Tamil Nadu', value: 'st0024' },
              { label: 'Telangana ', value: 'st0025' },
              { label: 'Tripura ', value: 'st0026' },
              { label: ' Uttar Pradesh', value: 'st0026' },
              { label: 'Uttarakhand ', value: 'st0027' },
              { label: 'West Bengal ', value: 'st0028' },
              { label: 'Delhi', value: 'Ut00' },
              { label: ' Andaman and Nicobar', value: 'Ut001' },
              { label: 'Chandigarh ', value: 'Ut002' },
              { label: 'Daman and Diu ', value: 'Ut003' },
              { label: ' Dadar and Nagar Haveli', value: 'Ut004' },
              { label: ' Jammu and Kashmir', value: 'Ut005' },
              { label: 'Ladakh ', value: 'Ut006' },
              { label: 'Lakshadweep ', value: 'Ut007' },
              { label: ' Puducherry', value: 'Ut008' },
            ]}
            defaultValue={'Delhi'}
            containerStyle={{
              height: 40,
              borderRadius: RFValue(40),
              marginBottom: RFValue(40),
              marginHorizontal: RFValue(0),
            }}
            onOpen={() => {
              this.setState({ dropdownHeight: 1000 });
            }}
            onClose={() => {
              this.setState({ dropdownHeight: 40 });
            }}
            style={{ backgroundColor: 'transparent' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{
              backgroundColor: 'pink',
            }}
            labelStyle={styles.dropdownLabelLight}
            arrowStyle={styles.dropdownLabelLight}
            onChangeItem={(item) => {
              this.showDetails(item.value);
            }}
          />
        </View>

        <View>
          <Text>STATE DETAILS</Text>
          <Text>Name : {this.state.state_name}</Text>
          <Text>CM : {this.state.state_cm}</Text>
          <Text>Capital : {this.state.state_capital}</Text>
          <Text>places to visit : {this.state.state_places_to_visit}</Text>
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: { flex: 1, resizeMode: 'cover' },
  titleContainer: { flex: 0.1, justifyContent: 'center', alignItems: 'center' },
  titleText: { fontSize: 30, fontWeight: 'bold', color: 'white' },
  mapContainer: { flex: 0.7 },
  map: { width: '100%', height: '100%' },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  infoText: { fontSize: 15, color: 'black', fontWeight: 'bold' },
});
