'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import SidebarContainer from './containers/SidebarContainer';
import Album from './components/Album';
import Artist from './components/Artist';
import {Route, Router, hashHistory, IndexRedirect} from 'react-router';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}> 
        <IndexRedirect to="/albums" />
        <Route path="/artists" component={ArtistsContainer} />  
        <Route path="/albums" component={AlbumsContainer} />
        <Route path="/albums/:albumId" component={AlbumContainer} /> {/* :albumId gets sent to the state as params */}
        <Route path="/artists/:artistId" component={ArtistContainer} />
      </Route>  
    </Router>
  </Provider>,
  document.getElementById('app')
);


{/* onEnter={fetchAndGoToAlbum} */}