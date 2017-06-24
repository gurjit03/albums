import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header name="Albums"/>
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
