import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const Album = (props) => {
  return(
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )
}

export default Album;
