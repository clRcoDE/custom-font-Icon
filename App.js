/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import {createIconSetFromFontello} from 'react-native-vector-icons'
// import fontelloConfig  from './src/config.json'
// const Icon = createIconSetFromFontello(fontelloConfig);
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      {/* <Icon name="uniFE96" size={60} color="#0af" />
      <Icon name="uni0649" size={60} color="#0af" /> */}
      <Text  style={{fontFamily:'khodkar', fontSize:30}}>سلام ری اکت نیتیو</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
