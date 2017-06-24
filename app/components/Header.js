import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Albums</Text>
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});

export default Header;
