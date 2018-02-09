import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/Header.js'
import AlbumList from  './src/components/AlbumList.js'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex :1}}>
      <Header headerText = "Albums"/>
      <AlbumList/>
      </View>
    );
  }
}

