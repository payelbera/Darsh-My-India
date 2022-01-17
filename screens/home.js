import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
        <View style={styles.titleBar}>
        <Text style={styles.titleText}>ISS TRACKER APP</Text>
        </View>
        <TouchableOpacity style={styles.routeCard} onPress={()=>{
          this.props.navigation.navigate('Iss')
        }}>
        <Text style={styles.routeText}>ISS LOCATION</Text>
        <Text style={styles.knowMore}>KNOW MORE</Text>
        <Text style={styles.bgDigit}>1</Text>
        <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard} onPress={()=>{
          this.props.navigation.navigate('Meteor')
        }}>
        <Text style={styles.routeText}>METEOR</Text>
        <Text style={styles.knowMore}>KNOW MORE</Text>
        <Text style={styles.bgDigit}>2</Text>
        <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        </ImageBackground>
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
  routeCard: {
    flex: 0.3,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: { flex: 0.15, justifyContent: 'center', alignItems: 'center' },
  titleText: { fontSize: 35, fontWeight: 'bold', color: 'white' },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 70,
    paddingLeft: 10,
  },
  knowMore: { paddingLeft: 30, color: 'red', fontSize: 15 },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 5,
    bottom: -25,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    right: 50,
    top: -20,
  },
});
