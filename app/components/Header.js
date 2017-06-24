import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{props.name}</Text>
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: 10,
    elevation: 5,
    position: 'relative'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});

export default Header;
