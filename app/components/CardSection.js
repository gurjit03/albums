import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.cardWrapper}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardSectionWrapper : {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  }
})


export default CardSection;
