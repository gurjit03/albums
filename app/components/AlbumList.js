import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

import Album from './Album';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums : []
    }
    this.renderAlbums = this.renderAlbums.bind(this);
  }
  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(res => {
      // debugger;
      console.log(res.data,"res.data");
      this.setState({albums: res.data})
    }).catch(e => {
      console.log(e.message);
    })
  }
  renderAlbums() {
    const { albums } = this.state
    if(albums.length === 0) {
      return <Text>empty</Text>
    }
    return this.state.albums.map(album => (
        <Album key={album.title} album={album} />
    ));
  }
  render() {
    console.log("asfadsf",this.state.albums)
    return (
      <View>
        <Text>
          Album List Component
        </Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
