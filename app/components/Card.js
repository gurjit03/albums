import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardWrapper}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper : {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth: 0,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    backgroundColor: '#ffffff'
  }
})


export default Card;
