'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import { Router, Route, Link, hashHistory } from 'react-router'


export default class Album extends React.Component {
  componentDidMount() {
    console.log(this.props)
    console.log(this.props.params.albumId)
    this.props.fetch({ id: this.props.params.albumId});
  }
  render () {
    const {selectedAlbum} = this.props // creates a default so that we can at least render the page
    console.log(selectedAlbum)
    selectedAlbum.songs = selectedAlbum.songs || []
    return (
      <div className="album">
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={selectedAlbum.songs} />
      </div>
    )
  }
};

// <Link to="/albums">Go to Albums</Link>
// <Link to={`/albums/${this.props.albumId}`}>Go to an Album</Link>