'use strict';

import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums 
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album 
});

export const fetchAlbum = album => 
  dispatch => 
    fetch(`/api/albums/${album.id}`)
      .then(res => res.json())
      .then(album => {
        dispatch(receiveAlbum(album));
      });