import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './app/components/Header';

export default class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
